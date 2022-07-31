import Head from 'next/head';

import type { NextPage } from 'next';

const Reounded: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-top justify-top py-0 px-2">
        <Head>
          <title>Reounded</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">Reounded Sample</h1>
          <br />
          <button className="rounded-none p-6 bg-sky-100 text-white">
            rounded-none p-6 bg-sky-100 text-white
          </button>
          <br />
          <br />
          <button className="rounded-sm p-6 bg-sky-200 text-white">
            rounded-sm p-6 bg-sky-200 text-white
          </button>
          <br />
          <br />
          <button className="rounded p-6 bg-sky-300 focus:ring-2 text-white">
            rounded p-6 bg-sky-300 text-white
          </button>
          <br />
          <br />
          <button className="rounded-md p-6 bg-sky-400 ring-offset-2 ring-4 text-white">
            rounded-md p-6 bg-sky-400 text-white
          </button>
          <br />
          <br />
          <button className="rounded-lg p-6 bg-sky-500 ring-offset-2 ring text-white">
            rounded-lg p-6 bg-sky-500 text-white
          </button>
          <br />
          <br />
          <button className="rounded-xl p-6 bg-sky-600 ring-offset-2 ring-2 text-white">
            rounded-xl p-6 bg-sky-600 text-white
          </button>
          <br />
          <br />
          <button className="rounded-2xl p-6 bg-sky-700 border-4 border-red-700 text-white">
            rounded-2xl p-6 bg-sky-700 border-4 border-red-700 text-white
          </button>
          <br />
          <br />
          <button className="rounded-3xl p-6 bg-sky-800 border-4 border-red-800 text-white">
            rounded-3xl p-6 bg-sky-800 border-4 border-red-800 text-white
          </button>
          <br />
          <br />
          <button className="rounded-full p-6 bg-sky-900 border-4 border-red-900 text-white">
            rounded-full p-6 bg-sky-900 border-4 border-red-900 text-white
          </button>
          <br />
          <br />
        </main>
      </div>
    </div>
  );
};

export default Reounded;
