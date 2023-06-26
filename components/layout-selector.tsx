'use client';
import { FunctionComponent, HTMLAttributes } from 'react';
import { Inter } from 'next/font/google';
import GuestLayout from './layouts/guest-layout';
import AuthLayout from './layouts/auth-layout';
import { guestRoutes } from '@/app/constants/guest-routes';
import { useAuth } from '@/app/hooks/auth';
import { usePathname } from 'next/navigation';

const LayoutSelector: FunctionComponent<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  const isGuestPath = guestRoutes.includes(usePathname());
  const { isLoading } = useAuth();
  if (isGuestPath) {
    return <GuestLayout>{children}</GuestLayout>;
  }

  return (
    <AuthLayout>
      {isLoading ? (
        <div className='fixed top-0 flex items-center justify-center w-full h-full bg-black bg-opacity-20'>
          <span className='loading loading-ring loading-lg'></span>
        </div>
      ) : (
        <></>
      )}
      {children}
    </AuthLayout>
  );
};

export default LayoutSelector;
