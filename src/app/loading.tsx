'use client';

import { Oval } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Oval
        color='#111111'
        height={80}
        width={80}
        secondaryColor='#ffffff'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
