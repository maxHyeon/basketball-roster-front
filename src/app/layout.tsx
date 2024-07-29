import './globals.css';

import Nav from './nav';
import { Suspense } from 'react';
export const metadata = {
  title: 'Hoopers',
  description:
    'Go Hoopers'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        {/* <Toast /> */}
      </body>
    </html>
  );
}