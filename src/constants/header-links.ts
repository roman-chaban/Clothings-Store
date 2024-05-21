export interface HeaderNavLinks {
  label: string;
  href: string;
  slugRef: string;
}

export const NAVBAR__LINKS: HeaderNavLinks[] = [
  {
    label: 'Home',
    href: '/',
    slugRef: '/',
  },
  {
    label: 'Sneakers',
    href: '/sneakers',
    slugRef: '/sneakers/sneaker/',
  },
  {
    label: 'Collections',
    href: '/collections',
    slugRef: `/collections`,
  },
  {
    label: 'Clothings',
    href: '/clothings',
    slugRef: '/clothings/clothing',
  },
  {
    label: 'Accessories',
    href: '/accessories',
    slugRef: '/accessories/',
  },
];
