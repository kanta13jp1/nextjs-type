import Head from 'next/head';

import type { NextPage } from 'next';

const Flex: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-top justify-top py-0 px-2">
        <Head>
          <title>Flex</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">Flex Sample</h1>
          <br />
          flex items-center bg-green-200
          <div className="flex items-center bg-green-200">
            <div className="flex-auto py-4 bg-sky-300">01 flex-auto py-4 bg-sky-300</div>
            <div className="flex-auto py-12 bg-red-300">02 flex-auto py-12 bg-red-300</div>
            <div className="flex-auto py-8 bg-yellow-300">03 flex-auto py-8 bg-yellow-300</div>
          </div>
          <br />
          flex items-stretch hover:items-center bg-green-200
          <div className="flex items-stretch hover:items-center bg-green-200">
            <div className="flex-auto py-4 bg-sky-300">01 flex-auto py-4 bg-sky-300</div>
            <div className="flex-auto py-12 bg-red-300">02 flex-auto py-12 bg-red-300</div>
            <div className="flex-auto py-8 bg-yellow-300">03 flex-auto py-8 bg-yellow-300</div>
          </div>
          <br />
          flex items-start hover:items-center bg-green-200
          <div className="flex items-start hover:items-center bg-green-200">
            <div className="flex-auto py-4 bg-sky-300">01 flex-auto py-4 bg-sky-300</div>
            <div className="flex-auto py-12 bg-red-300">02 flex-auto py-12 bg-red-300</div>
            <div className="flex-auto py-8 bg-yellow-300">03 flex-auto py-8 bg-yellow-300</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Flex;
