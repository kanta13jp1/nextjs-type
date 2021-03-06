import { useRouter } from 'next/router';

export const NaviItem = ({
  children,
  link,
  label,
  active,
  toggle,
}: {
  children: React.ReactNode;
  label: string;
  link: string;
  active?: boolean;
  toggle: () => void;
}): JSX.Element => {
  const router = useRouter();

  const handleClick = async (): Promise<void> => {
    await router.push(link);
    toggle();
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`mt-4 flex items-center py-2 px-6 ${
        active
          ? 'bg-gray-700/25 text-gray-100'
          : 'text-gray-500 hover:bg-gray-700/25 hover:text-gray-100'
      }`}
    >
      {children}
      <span className="mx-3">{label}</span>
    </a>
  );
};

export default NaviItem;
