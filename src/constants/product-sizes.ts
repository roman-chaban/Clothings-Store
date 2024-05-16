interface ProductSize {
  sizeNumber: number;
  sizeTitle: string;
}

interface ClothingSize {
  sizeNumbers: string;
  sizeTitle: string;
}

export const sizes: ProductSize[] = [
  { sizeNumber: 36, sizeTitle: '36 (EU) / 5 (US)' },
  { sizeNumber: 37, sizeTitle: '37 (EU) / 6 (US)' },
  { sizeNumber: 38, sizeTitle: '38 (EU) / 7 (US)' },
  { sizeNumber: 39, sizeTitle: '39 (EU) / 8 (US)' },
  { sizeNumber: 40, sizeTitle: '40 (EU) / 9 (US)' },
  { sizeNumber: 41, sizeTitle: '41 (EU) / 10 (US)' },
  { sizeNumber: 42, sizeTitle: '42 (EU) / 11 (US)' },
  { sizeNumber: 43, sizeTitle: '43 (EU) / 12 (US)' },
  { sizeNumber: 44, sizeTitle: '44 (EU) / 13 (US)' },
  { sizeNumber: 45, sizeTitle: '45 (EU) / 14 (US)' },
];

export const clothesSizes: ClothingSize[] = [
  { sizeNumbers: '(0-2)', sizeTitle: 'XS' },
  { sizeNumbers: '(4-6)', sizeTitle: 'S' },
  { sizeNumbers: '(8-10)', sizeTitle: 'M' },
  { sizeNumbers: '(12-14)', sizeTitle: 'L' },
  { sizeNumbers: '(16-18)', sizeTitle: 'XL' },
];
