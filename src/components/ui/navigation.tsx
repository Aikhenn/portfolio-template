'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile' },
  { label: 'Contact', href: '/contact' },


];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;

          return (
            <NavigationMenuItem key={href}>
              <Link href={href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`relative px-2 py-1 text-white group`}
                >
                  <span className="relative z-10">{label}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
