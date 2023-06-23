import { FunctionComponent, InputHTMLAttributes } from 'react';
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}
const Input: FunctionComponent<
  InputHTMLAttributes<HTMLInputElement> & InputProps
> = (props) => {
  const { name, type, placeholder } = props;

  return (
    <div className='flex flex-col text-base-content'>
      <input
        {...props}
        className='w-full max-w-xs input input-bordered input-primary'
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
};

export default Input;
