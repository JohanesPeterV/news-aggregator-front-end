/* eslint-disable @next/next/no-img-element */
import Article from '@/app/models/contracts/article';
import DateFormatUtil from '@/app/utils/date-format-util';

const ArticleSkeleton: React.FC<> = () => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center mt-4 animate-pulse'>
      <h1 className='w-full pl-8 mb-6 text-xl font-medium'>Article List</h1>
      {[...Array(10)].map((e, i) => (
        <div
          key={i}
          className='mb-8 mr-4 overflow-hidden shadow-sm mmd:w-full mmd:h-full group group-hover:shadow-xl w-72 h-80 card bg-base-100'
        >
          <figure className='w-full h-32 overflow-hidden'></figure>
          <div className='text-xs mmd:pt-4 mmd:h-full mmd:w-full mmd:absolute mmd:bg-black mmd:bg-opacity-60 mmd:text-base-100 card-body md:text-sm'>
            <div className='flex justify-between'>
              <h4></h4>
              <h4></h4>
            </div>
            <h2 className='font-semibold text-md'></h2>
            <h4></h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleSkeleton;
