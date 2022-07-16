import Link from 'next/link';
import { ReactNode } from 'react';

const Layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="flex-rows flex space-x-4 bg-red-500 p-2 font-bold text-white">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/dashbord">
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
