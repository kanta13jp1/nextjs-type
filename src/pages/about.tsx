import Head from 'next/head';

import Button from '@/components/atoms/button';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0 px-2">
      <Head>
        <title>About Page</title>
      </Head>
      <main>
        <h1 className="decoration-sky-500">ここは概要ページです</h1>
        <br />
        <h2 className="decoration-sky-500">
          rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700
        </h2>
        <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
          テスト
        </button>
        <br />
        <br />
        <h2 className="decoration-sky-500">
          rounded bg-sky-600 py-2 px-4 font-bold text-white hover:bg-sky-700
        </h2>
        <button className="rounded bg-sky-600 py-2 px-4 font-bold text-white hover:bg-sky-700">
          Save changes
        </button>
        <br />
        <br />
        <h2 className="decoration-sky-500">
          rounded bg-fuchsia-500 py-2 px-4 font-bold hover:bg-fuchsia-700
          dark:md:hover:bg-fuchsia-600
        </h2>
        <button className="rounded bg-fuchsia-500 py-2 px-4 font-bold hover:bg-fuchsia-700 dark:md:hover:bg-fuchsia-600">
          Save changes
        </button>
        <br />
        <br />
        <h2 className="decoration-sky-500">
          bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300
          active:bg-violet-700
        </h2>
        <button className="bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700">
          Save changes
        </button>
        <br />
        <br />
        <h2 className="decoration-sky-500">Button Componet</h2>
        {/* <!-- 作成したボタンコンポーネントを利用  --> */}
        <Button color={'primary'} fullWidth={false} disabled={false}>
          Button Componet
        </Button>
        <ul role="list" className="divide-y divide-slate-200 p-6">
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src="/img/erin-lindford.jpg" alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Erin Lindford</p>
              <p className="truncate text-sm text-slate-500">test@test.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src="/img/erin-lindford.jpg" alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Erin Lindford</p>
              <p className="truncate text-sm text-slate-500">test@test.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src="/img/erin-lindford.jpg" alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Erin Lindford</p>
              <p className="truncate text-sm text-slate-500">test@test.com</p>
            </div>
          </li>
          <li className="flex py-4 first:pt-0 last:pb-0">
            <img className="h-10 w-10 rounded-full" src="/img/erin-lindford.jpg" alt="" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">Erin Lindford</p>
              <p className="truncate text-sm text-slate-500">test@test.com</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default About;
