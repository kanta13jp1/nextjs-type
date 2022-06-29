import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0 px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="decoration-sky-500">Hello Next.js</h1>
    </div>
  );
}
