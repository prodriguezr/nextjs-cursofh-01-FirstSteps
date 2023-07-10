import Link from 'next/link';
import { HomeIcon, MailIcon } from '@primer/octicons-react';
import { NavItem } from '@/interfaces';
import { ActiveLink } from '../active-link';

const navItems: NavItem[] = [
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact', icon: MailIcon },
  { path: '/about', label: 'About' },
];

export const Navbar = () => {
  return (
    <nav className='flex items-center p-2 m-2 bg-blue-800 rounded bg-opacity-30'>
      <Link href='/' className='flex items-center gap-2'>
        <HomeIcon size={36} />
        <span className='text-xl font-bold'>Home</span>
      </Link>
      <div className='flex flex-1'></div>
      {navItems.map(({ label, path }) => (
        <ActiveLink key={label} label={label} path={path} />
      ))}
    </nav>
  );
};
