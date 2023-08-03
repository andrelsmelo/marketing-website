import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={playfairDisplay.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
