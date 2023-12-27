import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HelloTutor',
  description: 'Learn from the best tutors in the world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>
        <header className='max-w-[970px] mx-auto'>
          <NavBar />
        </header>
        
        {children}
        </body>
    </html>
  );
}
