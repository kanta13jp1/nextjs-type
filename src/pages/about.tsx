import Head from 'next/head';

import Button from '@/components/atoms/button';
import Typography from '@/components/atoms/typography';

import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="container mx-auto px-6 py-8">
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
          <div>
            <Typography variant={'h2'}>h2. Heading</Typography>
            <Typography variant={'h3'}>h3. Heading</Typography>
            <Typography variant={'h4'}>h4. Heading</Typography>
            <Typography variant={'h5'}>h5. Heading</Typography>
            <Typography variant={'h6'}>h6. Heading</Typography>
            <Typography variant={'subtitle1'}>
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur
            </Typography>
            <Typography variant={'subtitle2'}>
              subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis
              tenetur
            </Typography>
            <Typography>
              For years parents have espoused the health benefits of eating garlic bread with cheese
              to their children, with the food earning such an iconic status in our culture that
              kids will often dress up as warm, cheesy loaf for Halloween.
            </Typography>
            <Typography variant={'body2'}>
              But a recent study shows that the celebrated appetizer may be linked to a series of
              rabies cases springing up around the country.
            </Typography>
          </div>
          <div className="prose lg:prose my-12">
            <h1>@tailwindcss/line-clamp Plugin demo</h1>
          </div>
          <div style={{ width: '400px' }}>
            <p className="line-clamp-3">
              Et molestiae hic earum repellat aliquid est doloribus delectus. Enim illum odio porro
              ut omnis dolor debitis natus. Voluptas possimus deserunt sit delectus est saepe nihil.
              Qui voluptate possimus et quia. Eligendi voluptas voluptas dolor cum. Rerum est quos
              quos id ut molestiae fugit.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
