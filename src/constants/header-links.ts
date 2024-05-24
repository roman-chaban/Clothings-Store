export interface HeaderNavLinks {
  label: string;
  href: string;
  slugRef: string;
  title: string;
}

export const NAVBAR__LINKS: HeaderNavLinks[] = [
  {
    label: 'Home',
    href: '/',
    slugRef: '/',
    title: 'Home',
  },
  {
    label: 'Sneakers',
    href: '/sneakers',
    slugRef: '/sneakers/sneaker/',
    title: 'Sneakers',
  },
  {
    label: 'Clothings',
    href: '/clothings',
    slugRef: '/clothings/clothing',
    title: 'Clothings',
  },
  {
    label: 'Accessories',
    href: '/accessories',
    slugRef: '/accessories/',
    title: 'Accessories',
  },
  {
    label: 'Collections',
    href: '/collections',
    slugRef: `/collections`,
    title: 'Collections',
  },
];
