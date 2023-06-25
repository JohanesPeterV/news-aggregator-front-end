import { FunctionComponent, HTMLAttributes } from 'react';
const ClickCollapse: FunctionComponent<
  HTMLAttributes<HTMLDivElement> & { name: string }
> = ({ className, children, name }) => {
  return (
    <div className={`${className} collapse rounded-none`}>
      <input type='checkbox' />
      <div className='text-xl font-medium collapse-title'>{name}</div>
      <div className='collapse-content'>{children}</div>
    </div>
  );
};

export default ClickCollapse;
