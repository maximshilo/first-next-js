'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        console.log(`pathname: ${pathname}`);
        console.log(`link.href: ${link.href}`);
        console.log(`pathname === link.href: ${pathname === link.href}`);
        return (
          <Link
            key={link.name}
            href={link.href}
            style={{ backgroundColor: pathname === link.href ? '#E0F2FE' : undefined }}
            className={clsx(
              {
                'bg-sky-100-important text-blue-600 hover:bg-sky-80 hover:text-black-600': pathname === link.href,
                'bg-gray-50-important hover:bg-sky-100 hover:text-blue-600': pathname !== link.href,
              },
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3',
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
