interface ProductSize {
  sizeTitle: string;
}

interface ClothingSize {
  sizeTitle: string;
}

export const sizes: ProductSize[] = [
  { sizeTitle: '36 (EU) / 5 (US)' },
  { sizeTitle: '37 (EU) / 6 (US)' },
  { sizeTitle: '38 (EU) / 7 (US)' },
  { sizeTitle: '39 (EU) / 8 (US)' },
  { sizeTitle: '40 (EU) / 9 (US)' },
  { sizeTitle: '41 (EU) / 10 (US)' },
  { sizeTitle: '42 (EU) / 11 (US)' },
  { sizeTitle: '43 (EU) / 12 (US)' },
  { sizeTitle: '44 (EU) / 13 (US)' },
  { sizeTitle: '45 (EU) / 14 (US)' },
];

export const clothesSizes: ClothingSize[] = [
  { sizeTitle: 'XS / (0-2)' },
  { sizeTitle: 'S / (4-6)' },
  { sizeTitle: 'M / (8-10)' },
  { sizeTitle: 'L / (12-14)' },
  { sizeTitle: 'XL / (16-18)' },
];
