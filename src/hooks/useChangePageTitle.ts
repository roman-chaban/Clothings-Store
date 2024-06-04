import { useEffect } from 'react';

export const useChangePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
