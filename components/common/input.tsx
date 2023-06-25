import { FunctionComponent, InputHTMLAttributes } from 'react';
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}
const Input: FunctionComponent<
  InputHTMLAttributes<HTMLInputElement> & InputProps
> = (props) => {
  const { name, type, placeholder, className } = props;

  return (
    <input
      {...props}
      className={`w-full input input-bordered input-primary ${className}`}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
};

export default Input;
