import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '@/components/Header';
import localFont from '@next/font/local';
import Head from 'next/head';
import { Contact } from '@/components/Contact';

const Applefonts = localFont({
  src: [
    {
      path: '../../public/fonts/AppleSDGothicNeoB.ttf',
      weight: '400',
    },
  ],
  variable: '--font-apple',
});

const NotoSansRegularFonts = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSansRegular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-notoSans',
});

const NotoSansBoldFonts = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSansBold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-notoSansBold',
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextTemplate</title>
        <meta name="description" content="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${Applefonts.variable} ${NotoSansRegularFonts.variable} ${NotoSansBoldFonts.variable}`}
      >
        <Header />
        <Component {...pageProps} />
        <Contact />
      </div>
    </>
  );
};

export default App;
