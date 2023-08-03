import React, { useEffect, useState, useRef } from 'react';
import '../App.scss';
import Navbar from './navbar';

function News() {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    // Replace 'YOUR_API_KEY' with your actual NewsAPI API key
    const apiKey = '6cd68be4f35447f49c2460365e58ced2';
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=th&apiKey=${apiKey}`;

    // If there's a search query, add it to the API URL
    if (searchQuery) {
      apiUrl = `https://newsapi.org/v2/top-headlines?q=${searchQuery}&country=th&apiKey=${apiKey}`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          console.log('Error fetching news.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchNews();
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />

      <div class="home" name="home">
        <div class="image-container">
          <a href="https://www.reuters.com/world/asia-pacific/old-rivalries-new-battle-thailand-goes-polls-2023-05-13/" class="thailand-election-2023">
            <h1>Thailand opposition crushes military parties in election rout</h1>
          </a>
        </div>
      </div>
      <div>
        <h1>Top News Headlines</h1>
        <div id="news-container" name="news-container">
          {articles.map((article, index) => (
            <div className="news" key={index}>
              <h2>{article.title}</h2>
              {article.description && <p>{article.description}</p>}
              <h3>ผู้แต่ง: {article.author}</h3>
              <h3>เผยแพร่เมือ: {article.publishedAt}</h3>
              <a href={article.url} className='readmore'>Read more</a>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}

export default News;
