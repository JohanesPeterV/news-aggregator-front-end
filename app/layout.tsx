'use client';
import { usePathname } from 'next/navigation';
import './globals.css';
import GuestLayout from '@/components/layouts/guest-layout';
import { guestRoutes } from './constants/guest-routes';
import AuthLayout from '@/components/layouts/auth-layout';
import { useAuth } from './hooks/auth';

export const metadata = {
  title: 'News Aggregator',
  description: 'Application to aggregate news',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
}
