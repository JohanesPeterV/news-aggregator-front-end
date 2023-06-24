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
      {isLoading ? <div className='w-full h-full bg-black'></div> : <></>}
      {children}
    </AuthLayout>
  );
}
