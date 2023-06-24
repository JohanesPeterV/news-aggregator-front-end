'use client';

import { useAuth } from './hooks/auth';
import React, { useEffect, useState } from 'react';
import ArticleService from './services/article-service';
import Article from './models/contracts/article';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const fetchResult = await ArticleService.getArticles();
      const data = await fetchResult.data;
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  if (loading) {
    return <div>Loading articles...</div>;
  }

  return (
    <div>
      <h1>Article List</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <p>Author: {article.author}</p>
          <p>Source: {article.source}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
