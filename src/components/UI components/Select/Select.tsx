'use client';

import { useState, FC } from 'react';
import { Dispatch, SetStateAction } from 'react';
import makeAnimated from 'react-select/animated';
import Select, { MultiValue, StylesConfig } from 'react-select';
import { Sort, getSortedProducts } from '@/components/Sort/Sort';
import { Products } from '@/interfaces/products';
import styles from './Select.module.scss';
import dynamic from 'next/dynamic';

interface CustomSelectProps {
  products: Products[];
  setProducts: Dispatch<SetStateAction<Products[]>>;
}

const animatedComponents = makeAnimated();

interface Option {
  label: string;
  value: Sort;
}

const optionsList: Option[] = [
  {
    label: 'Alphabetically',
    value: Sort.ALPHABET,
  },
  {
    label: 'Discount',
    value: Sort.DISCOUNT,
  },
  {
    label: 'Cheapest',
    value: Sort.CHEAPEST,
  },
];

const customStyles: StylesConfig<Option, true> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#888',
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  }),
  option: (provided, state) => ({
    ...provided,
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: state.isFocused
      ? '#e0e0e0'
      : state.isSelected
      ? '#b0b0b0'
      : undefined,
  }),
};

const ProductsSelect: FC<CustomSelectProps> = ({ products, setProducts }) => {
  const [currentSort, setCurrentSort] = useState<Option[]>([]);

  const getValue = () => {
    return currentSort;
  };

  const onChange = (newValue: MultiValue<Option>) => {
    const newSortValues = newValue ? newValue.map((v) => v.value) : [];
    setCurrentSort(newValue as Option[]);

    const sortedProducts = getSortedProducts(products, newSortValues[0]);
    setProducts(sortedProducts);
  };

  return (
    <div className={styles.select}>
      <label className={styles.sortBy} htmlFor='sortBy'>
        Sort By:
        <Select
          id='sortBy'
          name='sortBy'
          classNamePrefix='custom-select'
          value={getValue()}
          onChange={onChange}
          options={optionsList}
          components={animatedComponents}
          isMulti
          placeholder={optionsList[0].label}
          styles={customStyles}
        />
      </label>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProductsSelect), { ssr: false });
