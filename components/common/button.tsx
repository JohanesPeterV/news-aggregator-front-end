import {
    ButtonHTMLAttributes,
    ComponentProps,
    ComponentType,
    FunctionComponent,
  } from 'react';
  
  const Button: FunctionComponent<
    ButtonHTMLAttributes<HTMLButtonElement> & Props
  > = ({ children, className, disabled, iconType, onClick, ...rest }) => {
    return (
      <button
        {...rest}
        className={[
          'button',
          className,
        ].join(' ')}
        disabled={disabled}
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick(e);
        }}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  
  interface Props {
    disabled?: boolean;
    iconType?: 'solid' | 'outline';
  }
  