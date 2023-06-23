import { FunctionComponent, HTMLAttributes } from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import { Toaster } from 'react-hot-toast';

const BaseLayout: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <html lang='en' data-theme='emerald'>
      <body className={`${inter.className}`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
};

export default BaseLayout;
