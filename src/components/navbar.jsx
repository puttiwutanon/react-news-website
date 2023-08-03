import React, {useState} from 'react';
import '../App.scss';
import Logo from './logo';
import { Link } from 'react-scroll';

function Navbar({onSearch }) {
  const [showHamburgerContent, setShowHamburgerContent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleHamburgerContent = () => {
    setShowHamburgerContent(!showHamburgerContent);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  

  return (
    <>
      <div>
        <div className="navbar">
          <Logo/>

          <div className="hamburger-menu">
            <Link onClick={toggleHamburgerContent}><i className="fa-solid fa-bars fa-2x"></i></Link>
          </div>

          <div className="nav-contents">
            <span><Link to="home" spy={true} smooth={true} offset={50} duration={100}>home</Link></span>
            <span><Link to="news-container" spy={true} smooth={true} offset={-180} duration={100}>news</Link></span>
            <span><Link to="contact" spy={true} smooth={true} offset={50} duration={100}>contact</Link></span>
          </div>



          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <button type="submit"><i class="fa-solid fa-magnifying-glass" ></i></button>
            </form>
          </div>

          
        </div>

        <div className={`hamburger-content ${showHamburgerContent ? 'show' : ''}`}>
          <ul>
            <li><Link to="home" spy={true} smooth={true} offset={50} duration={100}>home</Link></li>
            <li><Link to="news-container" spy={true} smooth={true} offset={-180} duration={100}>news</Link></li>
            <li><Link to="contact" spy={true} smooth={true} offset={50} duration={100}>contact</Link></li>
          </ul>
          <div className="search-bar">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search..."
              />
              <button type="submit"><i class="fa-solid fa-magnifying-glass" ></i></button>
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;


