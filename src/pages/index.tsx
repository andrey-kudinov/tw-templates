import { Inter } from 'next/font/google';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { CTA } from '@/components/CTA';
import { Articles } from '@/components/Articles';
import { ImageWithText } from '@/components/ImageWithText';
import { Cards } from '@/components/Cards';
import { Stats } from '@/components/Stats';
import { FAQ } from '@/components/FAQ';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Articles />
      <ImageWithText />
      <Cards />
      <FAQ />
    </>
  );
}
