'use client';

import { Oval } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2rem',
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
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='200'
        height='150'
        viewBox='0 0 24 24'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z'
          clipRule='evenodd'
        ></path>
      </svg>
    </div>
  );
}
