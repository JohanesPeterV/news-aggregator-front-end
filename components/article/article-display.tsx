/* eslint-disable @next/next/no-img-element */
import Article from '@/app/models/contracts/article';
import DateFormatUtil from '@/app/utils/date-format-util';

const ArticleDisplay: React.FC<{ articles: Article[] }> = ({ articles }) => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center mt-4 '>
      <h1 className='w-full pl-8 mb-6 text-xl font-medium'>Article List</h1>
      {articles.map((article) => (
        <a
          href={article.url}
          key={article.id}
          className='mb-8 mr-4 overflow-hidden shadow-sm mmd:w-full mmd:h-full group group-hover:shadow-xl w-72 h-80 card bg-base-100'
        >
          {article.url.length > 0 ? (
            <figure className='w-full h-32 overflow-hidden'>
              <img
                src={article.image_url}
                alt='image'
                className='w-full rounded-t-xl'
              />
            </figure>
          ) : (
            <></>
          )}
          <div className='text-xs mmd:pt-4 mmd:h-full mmd:w-full mmd:absolute mmd:bg-black mmd:bg-opacity-60 mmd:text-base-100 card-body md:text-sm'>
            <div className='flex justify-between'>
              <h4>{article.author}</h4>
              <h4>{article.source}</h4>
            </div>
            <h2 className='font-semibold text-md'>{article.title}</h2>
            <h4>
              {DateFormatUtil.parseShortDateIntoReadableDateWithoutYear(
                article.publish_date.substring(0, 10)
              )}
            </h4>
          </div>
          {/* <div className='absolute z-20 hidden w-full h-full text-white bg-black card-body bg-opacity-20 group-hover:block'>
            {article.content}
          </div> */}
        </a>
      ))}
    </div>
  );
};

export default ArticleDisplay;
