import React, { ReactNode } from 'react';
import Header from '../components/header'

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <>
    <Header />
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-screen-md mx-auto p-4">
        {children}
      </div>
    </div>
  </>;
}
