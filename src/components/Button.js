import styles from '@/styles/Button.module.css';

import { Playfair_Display } from 'next/font/google';

const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: '600' });

export default function Button ({variant, text, onClick}) {
  const buttonClassName = `${styles.button} ${styles[variant]} ${playfairDisplay.className}`;

  return (
    <>
      <button className={buttonClassName} onClick={onClick}>
        {text}
      </button>
    </>
  );
};