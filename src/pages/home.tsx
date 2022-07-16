import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0 px-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="decoration-sky-500">Hello Next.js</h1>
      <div className="mx-auto flex max-w-sm items-center space-x-8 rounded-xl bg-white p-6 shadow-lg">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <div className="mx-auto max-w-sm space-y-2 rounded-xl bg-white p-8 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-6 sm:py-4">
        <img
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/img/erin-lindford.jpg"
          alt="Woman's Face"
        />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-slate-500">Product Engineer</p>
          </div>
          <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
