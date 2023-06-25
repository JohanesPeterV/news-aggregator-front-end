import ArticleService from '@/app/services/article-service';
import { useState, useEffect } from 'react';
import Input from '@/components/common/input';
import ClickCollapse from '@/components/common/click-collapse';
import Card from '@/components/common/card';

interface ArticleFilterProps {
  onFilterChange: (filter: ArticleFilter) => void;
}

interface ArticleFilter {
  searchTerm: string;
  category: string;
  startDate: string;
  endDate: string;
}

const ArticleFilter: React.FC<ArticleFilterProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    if (categories.length > 0) {
      return;
    }
    ArticleService.getCategories().then((getCategoriesFetchResults) => {
      setCategories(getCategoriesFetchResults.data.categories);
    });
  }, [categories]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setCategory(event.target.value);
  };

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEndDate(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const filter: ArticleFilter = {
      searchTerm,
      category,
      startDate,
      endDate,
    };

    onFilterChange(filter);
  };

  return (
    <Card className='w-full px-4 py-0 bg-base-100'>
      <ClickCollapse name='Filter Article' className='p-0 '>
        <form
          onSubmit={handleFormSubmit}
          className='flex flex-col w-full py-2 space-y-4 '
        >
          <div className='flex items-center space-x-2'>
            <Input
              name='search'
              type='text'
              onChange={handleSearch}
              placeholder='search'
            />
            <select
              defaultValue=''
              className='select'
              onChange={handleCategoryChange}
            >
              <option value='' disabled>
                category
              </option>
              <option value=''>all</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='flex flex-col '>
            <label htmlFor='start-date'>Start Date</label>
            <Input
              id='start-date'
              type='date'
              name='start-date'
              value={startDate}
              onChange={handleStartDateChange}
              className='max-w-sm input'
              placeholder='start date'
            />
            <label htmlFor='end-date'>End Date</label>

            <Input
              name='end-date'
              type='date'
              value={endDate}
              onChange={handleEndDateChange}
              className='max-w-sm input'
              placeholder='end date'
            />
          </div>
          <button
            type='submit'
            className='px-4 py-2 font-semibold text-white rounded bg-primary hover:bg-primary-focus'
          >
            Apply Filters
          </button>
        </form>
      </ClickCollapse>
    </Card>
  );
};

export default ArticleFilter;
