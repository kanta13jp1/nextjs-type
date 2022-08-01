import Head from 'next/head';

import type { NextPage } from 'next';

const Flex: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-start justify-start py-0 px-2">
        <Head>
          <title>Flex</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">Flex Sample</h1>
          <br />
          flex items-center bg-green-200
          <div className="flex items-center bg-green-200">
            <div className="m-4 flex-auto bg-sky-300 p-4">01 m-4 flex-auto bg-sky-300 p-4</div>
            <div className="m-12 flex-auto bg-red-300 p-12">02 m-12 flex-auto bg-red-300 p-12</div>
            <div className="m-8 flex-auto bg-yellow-300 p-8">
              03 m-8 flex-auto bg-yellow-300 p-8
            </div>
          </div>
          <br />
          flex items-stretch hover:items-center bg-green-200
          <div className="flex items-stretch bg-green-200 hover:items-center">
            <div className="m-4 flex-auto bg-sky-300 p-4">01 m-4 flex-auto bg-sky-300 p-4</div>
            <div className="m-12 flex-auto bg-red-300 p-12">02 m-12 flex-auto bg-red-300 p-12</div>
            <div className="m-8 flex-auto bg-yellow-300 p-8">
              03 m-8 flex-auto bg-yellow-300 p-8
            </div>
          </div>
          <br />
          flex items-start hover:items-center bg-green-200
          <div className="flex items-start bg-green-200 hover:items-center">
            <div className="m-4 flex-auto bg-sky-300 p-4">01 m-4 flex-auto bg-sky-300 p-4</div>
            <div className="m-12 flex-auto bg-red-300 p-12">02 m-12 flex-auto bg-red-300 p-12</div>
            <div className="m-8 flex-auto bg-yellow-300 p-8">
              03 m-8 flex-auto bg-yellow-300 p-8
            </div>
          </div>
          <br />
          flex items-baseline hover:items-center bg-green-200
          <div className="flex items-baseline bg-green-200 hover:items-center">
            <div className="m-4 bg-sky-300 px-4 pt-2 pb-6">01 m-4 bg-sky-300 px-4 pt-2 pb-6</div>
            <div className="m-12 bg-red-300 px-12 pt-8 pb-12">
              02 m-12 bg-red-300 px-12 pt-8 pb-12
            </div>
            <div className="m-8 bg-yellow-300 px-8 pt-12 pb-4">
              03 bg-yellow-300 px-8 pt-12 pb-4
            </div>
          </div>
          <br />
          <div className="relative h-48 bg-green-200">
            <p>relative h-48 bg-green-200</p>
            <div className="absolute bottom-0 left-0 bg-sky-300">
              <p>absolute bottom-0 left-0 bg-sky-300</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Flex;
