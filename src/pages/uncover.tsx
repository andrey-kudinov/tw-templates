import { Inter } from 'next/font/google';
import { Uncover } from '@/components/Uncover';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Uncover />
    </>
  );
}
