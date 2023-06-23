import { FunctionComponent, HTMLAttributes } from 'react';
import BaseLayout from './base-layout';

const GuestLayout: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => (
  
  <BaseLayout>
    <div className='bg-base-100'>
    {children}
    </div>
  </BaseLayout>
);

export default GuestLayout;
