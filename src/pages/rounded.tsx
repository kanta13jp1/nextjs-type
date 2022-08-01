import Head from 'next/head';

import type { NextPage } from 'next';

const Reounded: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex min-h-screen flex-col items-start justify-start py-0 px-2">
        <Head>
          <title>Reounded</title>
        </Head>
        <main>
          <h1 className="decoration-sky-500">Reounded Sample</h1>
          <br />
          flex flex-nowrap
          <div className="flex flex-nowrap">
            <button className="m-4 rounded-none bg-sky-100 p-6 text-white shadow-md">
              rounded-none bg-sky-100 p-6 text-white shadow-md
            </button>
            <button className="m-4 rounded-sm bg-sky-200 p-6 text-white shadow-lg">
              rounded-sm bg-sky-200 p-6 text-white shadow-lg
            </button>
            <button className="m-4 rounded bg-sky-300 p-6 text-white shadow-xl focus:ring-2">
              rounded bg-sky-300 p-6 text-white shadow-xl focus:ring-2
            </button>
          </div>
          <br />
          <br />
          flex flex-wrap
          <div className="flex flex-wrap">
            <button className="m-4 rounded-md bg-sky-400 p-6 text-white shadow-2xl ring-4 ring-offset-2">
              rounded-md bg-sky-400 p-6 text-white shadow-2xl ring-4 ring-offset-2
            </button>
            <button className="m-4 rounded-lg bg-sky-500 p-6 text-white ring ring-offset-2">
              m-4 rounded-lg bg-sky-500 p-6 text-white ring ring-offset-2
            </button>
            <button className="rounded-xl bg-sky-600 p-6 text-white ring-2 ring-offset-2">
              rounded-xl p-6 bg-sky-600 text-white
            </button>
          </div>
          <br />
          <br />
          flex flex-wrap-reverse
          <div className="flex flex-wrap-reverse">
            <button className="m-4 rounded-2xl border-4 border-red-700 bg-sky-700 p-6 text-white">
              rounded-2xl p-6 bg-sky-700 border-4 border-red-700 text-white
            </button>
            <button className="m-4 rounded-3xl border-4 border-red-800 bg-sky-800 p-6 text-white">
              rounded-3xl p-6 bg-sky-800 border-4 border-red-800 text-white
            </button>
            <button className="m-4 rounded-full border-4 border-red-900 bg-sky-900 p-6 text-white">
              rounded-full p-6 bg-sky-900 border-4 border-red-900 text-white
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reounded;
