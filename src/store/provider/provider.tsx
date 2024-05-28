'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store/store';
import React, { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <Provider store={store}>{children}</Provider>;
}
