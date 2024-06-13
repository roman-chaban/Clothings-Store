'use client';

import React, { FC, useState } from 'react';
import styles from '@/app/help/HelpStyles.module.scss';
import { helpList } from './help-list';
import { Accordion } from '@/components/Accordion/Accordion';

export const HelpList: FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const handleToggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <ul className={styles.helpList}>
      {helpList.map((item, index) => (
        <div key={item.listTitle} className={styles.listBlock}>
          <Accordion
            onToggle={() => handleToggleAccordion(index)}
            title={item.listTitle}
            subTitles={item.listSubitems[0]}
            isOpen={openAccordionIndex === index}
          />
        </div>
      ))}
    </ul>
  );
};
