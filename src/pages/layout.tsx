import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex-rows flex space-x-4 bg-red-500 p-2 font-bold text-white">
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/text-color">
          <a>TextColor</a>
        </Link>
        <Link href="/rounded">
          <a>Rounded</a>
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
