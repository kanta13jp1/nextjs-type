import Head from 'next/head';

import type { NextPage } from 'next';

const TextColor: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-top justify-top py-0 px-2">
        <Head>
          <title>TextColor</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">TextColor Sample</h1>
          <br />
          <h1 className="text-red-50 text-xl">text-red-50 text-xl</h1>
          <br />
          <h1 className="text-red-100 text-xl">text-red-100 text-xl</h1>
          <br />
          <h1 className="text-red-200 text-xl">text-red-200 text-xl</h1>
          <br />
          <h1 className="text-red-300 text-xl">text-red-300 text-xl</h1>
          <br />
          <h1 className="text-red-400 text-xl">text-red-400 text-xl</h1>
          <br />
          <h1 className="text-red-500 text-xl">text-red-500 text-xl</h1>
          <br />
          <h1 className="text-red-600 text-xl">text-red-600 text-xl</h1>
          <br />
          <h1 className="text-red-700 text-xl">text-red-700 text-xl</h1>
          <br />
          <h1 className="text-red-800 text-xl">text-red-800 text-xl</h1>
          <br />
          <h1 className="text-red-900 text-xl">text-red-900 text-xl</h1>
          <br />
          <h1 className="text-orange-50 text-xs">text-orange-50 text-xs</h1>
          <br />
          <h1 className="text-orange-100 text-xs">text-orange-100 text-xs</h1>
          <br />
          <h1 className="text-orange-200 text-xs">text-orange-200 text-xs</h1>
          <br />
          <h1 className="text-orange-300 text-xs">text-orange-300 text-xs</h1>
          <br />
          <h1 className="text-orange-400 text-xs">text-orange-400 text-xs</h1>
          <br />
          <h1 className="text-orange-500 text-xs">text-orange-500 text-xs</h1>
          <br />
          <h1 className="text-orange-600 text-xs">text-orange-600 text-xs</h1>
          <br />
          <h1 className="text-orange-700 text-xs">text-orange-700 text-xs</h1>
          <br />
          <h1 className="text-orange-800 text-xs">text-orange-800 text-xs</h1>
          <br />
          <h1 className="text-orange-900 text-xs">text-orange-900 text-xs</h1>
          <br />
        </main>
      </div>
    </div>
  );
};

export default TextColor;
