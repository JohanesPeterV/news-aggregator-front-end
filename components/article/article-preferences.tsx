import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleService from '@/app/services/article-service';
import Card from '../common/card';
import ClickCollapse from '../common/click-collapse';
import UserService from '@/app/services/user-service';
import { toast } from 'react-hot-toast';

interface ArticlePreferenceProps {
  onPreferenceChange: () => void;
}
const ArticlePreferences: React.FC<ArticlePreferenceProps> = ({
  onPreferenceChange,
}) => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    preferred_sources: [],
    preferred_categories: [],
    preferred_authors: [],
  });
  const [categories, setCategories] = useState<string[]>([]);
  const [sources, setSources] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);

  useEffect(() => {
    const fetchPreferences = async () => {
      try {
        const userPreferencesFetchResult =
          await UserService.getUserPreferences();
        const userPreferences = userPreferencesFetchResult.data.preferences
          ? JSON.parse(userPreferencesFetchResult.data.preferences)
          : null;

        setUserPreferences({
          preferred_authors: userPreferences.preferred_authors ?? [],
          preferred_categories: userPreferences.preferred_categories ?? [],
          preferred_sources: userPreferences.preferred_sources ?? [],
        });
      } catch (error) {
        console.error('Error fetching preferences:', error);
      }
    };

    fetchPreferences();
    const fetchOptions = async () => {
      try {
        const categoriesResponse = await ArticleService.getCategories();
        const sourcesResponse = await ArticleService.getSources();
        const authorsResponse = await ArticleService.getAuthors();
        setCategories(categoriesResponse.data.categories);
        setSources(sourcesResponse.data.sources);
        setAuthors(authorsResponse.data.authors);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    preferenceType: keyof UserPreferences
  ) => {
    const { value, checked } = e.target;
    setUserPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preferenceType]: checked
        ? [...prevPreferences[preferenceType], value]
        : prevPreferences[preferenceType].filter((item) => item !== value),
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await toast.promise(UserService.updatePreferences(userPreferences), {
      error: 'Error updating preferences',
      loading: 'Updating preferences...',
      success: 'Preferences updated successfully',
    });
    onPreferenceChange();
  };

  return (
    <Card className='w-full px-4 py-0 bg-base-100'>
      <ClickCollapse name='Your Preferences' className='p-0 '>
        <div className='container mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <h2 className='mb-2 text-lg font-bold'>Preferred Sources</h2>
              {sources.map((option) => (
                <label key={option}>
                  <input
                    type='checkbox'
                    value={option}
                    checked={userPreferences.preferred_sources.includes(option)}
                    onChange={(e) =>
                      handleCheckboxChange(e, 'preferred_sources')
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className='mb-4'>
              <h2 className='mb-2 text-lg font-bold'>Preferred Categories</h2>
              {categories.map((option) => (
                <label key={option}>
                  <input
                    type='checkbox'
                    value={option}
                    checked={userPreferences.preferred_categories.includes(
                      option
                    )}
                    onChange={(e) =>
                      handleCheckboxChange(e, 'preferred_categories')
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            <div className='mb-4'>
              <h2 className='mb-2 text-lg font-bold'>Preferred Authors</h2>
              {authors.map((option) => (
                <label key={option}>
                  <input
                    type='checkbox'
                    value={option}
                    checked={userPreferences.preferred_authors.includes(option)}
                    onChange={(e) =>
                      handleCheckboxChange(e, 'preferred_authors')
                    }
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              type='submit'
              className='px-4 py-2 rounded text-base-100 bg-primary'
            >
              Save Preferences
            </button>
          </form>
        </div>
      </ClickCollapse>
    </Card>
  );
};

export default ArticlePreferences;
