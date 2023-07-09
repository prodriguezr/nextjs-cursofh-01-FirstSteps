'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';

interface ActiveLinkProps {
  path: string;
  label: string;
}

const ActiveLink = ({ path, label }: ActiveLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${path !== pathName ? style.link : style['active-link']}`}
      href={path}
    >
      {label}
    </Link>
  );
};

export default ActiveLink;
