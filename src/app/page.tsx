import { Hero } from '@/components/Hero/Hero';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'E-Commerce | Home',
}

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
