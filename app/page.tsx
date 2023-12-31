'use client';
import React, { useEffect, useState } from 'react';
import ArticleService from './services/article-service';
import Article from './models/contracts/article';
import ArticleFilter from '@/components/article/article-filter';
import Image from 'next/image';
import ArticleDisplay from '@/components/article/article-display';
import Pagination from '@/components/article/article-pagination';
import ArticleSkeleton from '@/components/article/article-skeleton';

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArticles(currentPage);
  }, [currentPage]);

  const fetchArticles = async (page: number, filter?: ArticleFilter) => {
    const articlePaginationParams: ArticlePaginationParams = {
      category: filter ? filter.category : null,
      start_date: filter ? filter.startDate : null,
      end_date: filter ? filter.endDate : null,
      page: currentPage,
      per_page: 20,
      q: filter ? filter.searchTerm : null,
    };
    try {
      const fetchResult = await ArticleService.getArticles(
        articlePaginationParams
      );
      const data = await fetchResult.data;
      setArticles(data.articles.data);
      setTotalPages(data.articles.last_page);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (filter: ArticleFilter): void => {
    setCurrentPage(1); // Reset to the first page when applying filters
    fetchArticles(1, filter);
  };

  return (
    <main className='flex flex-col items-center justify-between min-h-screen bg-base-200'>
      <div className='flex flex-col w-5/6 px-6 pt-12 '>
        <ArticleFilter onFilterChange={handleFilterChange} />
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
