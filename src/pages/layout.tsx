import Link from 'next/link';
import { ReactNode } from 'react';
import useSWR from 'swr';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Layout = ({ children }: Props) => {
  const { data, error } = useSWR('/api/profile-data', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <nav className="flex flex-wrap space-x-4 bg-red-500 p-2 font-bold text-white">
        <div>
          Name : {data.name} Bio : {data.bio}
        </div>
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/product-page">
          <a>ProductPage</a>
        </Link>
        <Link href="/text-color">
          <a>TextColor</a>
        </Link>
        <Link href="/rounded">
          <a>Rounded</a>
        </Link>
        <Link href="/flex">
          <a>Flex</a>
        </Link>
        <Link href="/font-family">
          <a>FontFamily</a>
        </Link>
        <Link href="/swr">
          <a>SWR</a>
        </Link>
        <Link href="/">
          <a>Dashbord</a>
        </Link>
      </nav>
      {children}
    </div>
  );
};

type Props = {
  children?: ReactNode;
};

export default Layout;
