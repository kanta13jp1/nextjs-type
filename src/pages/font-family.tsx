import Head from 'next/head';

import type { NextPage } from 'next';

const FontFamily: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-top justify-top py-0 px-2">
        <Head>
          <title>FontFamily</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">FontFamily Sample</h1>
          <br />
          <p className="font-sans text-2xl">
            font-sans The quick brown fox jumps over the lazy dog.
          </p>
          <br />
          <br />
          <p className="font-serif text-2xl">
            font-serif The quick brown fox jumps over the lazy dog.
          </p>
          <br />
          <br />
          <p className="font-mono text-2xl">
            font-mono The quick brown fox jumps over the lazy dog.
          </p>
          <br />
          <br />
        </main>
      </div>
    </div>
  );
};

export default FontFamily;