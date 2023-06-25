'use client';
import React, { useEffect, useState } from 'react';
import ArticleFilter from '@/components/article/article-filter';
import ArticleDisplay from '@/components/article/article-display';
import Pagination from '@/components/article/article-pagination';
import ArticleSkeleton from '@/components/article/article-skeleton';
import Article from '../models/contracts/article';
import ArticleService from '../services/article-service';
import ArticlePreferences from '@/components/article/article-preferences';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles();
  }, [currentPage]);
  const fetchArticles = () => {
    setLoading(true);
    const paginationParams: PaginationParams = {
      page: currentPage,
      per_page: 20,
    };
    ArticleService.getArticlesBasedOnPreferences(paginationParams).then(
      (res) => {
        const fetchResult = res.data.articles;
        console.log(fetchResult);
        setArticles(fetchResult.data);
        setTotalPages(fetchResult.last_page);
        setLoading(false);
      }
    );
  };
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className='flex flex-col items-center justify-between min-h-screen bg-base-200'>
      <div className='flex flex-col w-5/6 px-6 pt-12 '>
        <ArticlePreferences
          onPreferenceChange={() => {
            setCurrentPage(1);
            fetchArticles();
          }}
        />
        {loading ? <ArticleSkeleton /> : <ArticleDisplay articles={articles} />}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
}

export default Home;
