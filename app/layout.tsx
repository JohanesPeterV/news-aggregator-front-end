import './globals.css';
import LayoutSelector from '@/components/layout-selector';
import React from 'react';

export const metadata = {
  title: 'News Aggregator',
  description: 'Application to aggregate news',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutSelector>{children}</LayoutSelector>;
}
