'use client';

import { useCallback, useState } from 'react';

type InitialValue = number;

export const useCount = (initialValue = 0) => {
  const [counter, setCounter] = useState<InitialValue>(initialValue);

  const incrementCounter = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  }, []);

  const decrementCounter = useCallback(() => {
    if (counter < 1) return;
    setCounter((prevCounter) => prevCounter - 1);
  }, [counter]);

  return { initialValue, incrementCounter, decrementCounter };
};
