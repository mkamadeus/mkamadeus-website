import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AppProps } from 'next/app';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
