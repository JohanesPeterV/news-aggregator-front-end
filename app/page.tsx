'use client';

import { useAuth } from './hooks/auth';

export default function Home() {
  useAuth();
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'></main>
  );
}
