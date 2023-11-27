'use client'
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type LetterKeys = 'c' | 'h' | 'o' | 'i' | 'c2' | 'e';

type LetterClasses = {
  [key in LetterKeys]?: string;
};

export default function ChoiceLogo({
  className,
  letterClasses = {
    c: '#6666ff', h: '#7a66ff', o: '#5151cc', i: '#4747b2', c2: '#7066ff', e: '#c2beff'
  },
}: {
  className?: string,
  letterClasses?: LetterClasses
}) {
  const [colorClasses, setColorClasses] = useState(letterClasses);

  useEffect(() => {
    const letters: LetterKeys[] = ['c', 'h', 'o', 'i', 'c2', 'e'];

    const intervals = letters.map(letter => {
      return setInterval(() => {
        // randomize colour in bright hues from similar colour palette
        const colours = colorClasses![letter]?.match(/\d+/g);
        if (colours) {
          const colorPalette = [
            '#6666ff', '#7a66ff', '#5151cc', '#4747b2', '#7066ff', '#c2beff',
            '#6050dc', '#6e7cff', '#d1d1e9', '#4c4f9d', '#6565c4', '#8487e1',
            '#d9c8ff', '#bcb2ff', '#a497e2', '#887acf', '#9b91cc', '#a49bde',
            '#8a82c6', '#b3aaff'
          ];
          const randomColor = colorPalette[Math.floor(Math.random() * colorPalette.length)];

          if (randomColor) {
            setColorClasses(prevClasses => ({
              ...prevClasses,
              [letter]: randomColor
            }));
          }
        }
      }, Math.random() * 2000 + 1000);  // Random interval between 1 to 3 seconds
    });



    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [letterClasses]);

  const blink = {
    hidden: { opacity: 1 },
    visible: { opacity: 0.5, transition: { duration: 0.5, yoyo: Infinity } },
  };


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 153.72 24"
      id="choice-logo"
      className={clsx("w-auto h-6 fill-current", className)}
      role="img"
      aria-label="Choice OMG Logo"
      aria-description="This brand uses hot pink as an accent color. It's quite unique and truly reflects the brand's personality."
    >
      <motion.polygon
        className={clsx("choice_logo letter_c", letterClasses?.c)}
        points="50.89 0.58 50.89 9.75 36.2 9.75 36.2 0.58 30.56 0.58 30.56 23.39 36.2 23.39 36.2 14.28 50.89 14.28 50.89 23.39 56.56 23.39 56.56 0.58 50.89 0.58"
        fill={colorClasses.c}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.polygon>
      <motion.path
        className={clsx("choice_logo letter_h", letterClasses?.h)}
        d="M85.65,3.34A17.37,17.37,0,0,0,74.72,0,17.3,17.3,0,0,0,63.77,3.39,10.52,10.52,0,0,0,59.5,12a10.6,10.6,0,0,0,4.27,8.62A17.06,17.06,0,0,0,74.67,24,17.29,17.29,0,0,0,85.6,20.61,10.63,10.63,0,0,0,89.91,12a10.64,10.64,0,0,0-4.27-8.67m-4,14.09a11,11,0,0,1-6.94,2.05,10.51,10.51,0,0,1-6.85-2.1A6.51,6.51,0,0,1,65.24,12a6.53,6.53,0,0,1,2.65-5.43,10.67,10.67,0,0,1,6.86-2.09,10.9,10.9,0,0,1,6.94,2.09A6.57,6.57,0,0,1,84.33,12a6.72,6.72,0,0,1-2.63,5.42"
        fill={colorClasses.h}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.path>
      <motion.rect
        className={clsx("choice_logo letter_o", letterClasses?.o)}
        x="92.7"
        y="0.57"
        width="5.64"
        height="22.83"
        fill={colorClasses.o}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.rect>
      <motion.path
        className={clsx("choice_logo letter_i", letterClasses?.i)}
        d="M116.45,24a17.18,17.18,0,0,1-10.9-3.36A10.61,10.61,0,0,1,101.28,12a10.51,10.51,0,0,1,4.27-8.6,17.39,17.39,0,0,1,11-3.39,24,24,0,0,1,6.64.85,14.87,14.87,0,0,1,3.61,1.63l.81.49V8.75L124.08,6.5a13.9,13.9,0,0,0-2.78-1.32,16.2,16.2,0,0,0-4.85-.73,10.67,10.67,0,0,0-6.86,2.09A6.51,6.51,0,0,0,106.94,12a6.48,6.48,0,0,0,2.63,5.4,10.69,10.69,0,0,0,6.88,2.09,12.92,12.92,0,0,0,4.61-.74,24.89,24.89,0,0,0,3.09-1.57l3.34-1.9v5.42l-2.56,1.5a15.27,15.27,0,0,1-6.49,1.7c-.29,0-.62,0-1,.05s-.65.06-1,.06"
        fill={colorClasses.i}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.path>
      <motion.path
        className={clsx("choice_logo letter_c2", letterClasses?.c2)}
        d="M15.18,24A17.21,17.21,0,0,1,4.27,20.61,10.55,10.55,0,0,1,0,12,10.5,10.5,0,0,1,4.27,3.39,17.29,17.29,0,0,1,15.23,0a23.94,23.94,0,0,1,6.63.85,14.7,14.7,0,0,1,3.61,1.63l.81.49V8.76L22.79,6.51A13.12,13.12,0,0,0,20,5.19a15.69,15.69,0,0,0-4.86-.73A10.62,10.62,0,0,0,8.33,6.54,6.5,6.5,0,0,0,5.67,12,6.44,6.44,0,0,0,8.3,17.35a10.67,10.67,0,0,0,6.88,2.09,12.91,12.91,0,0,0,4.61-.73,27.58,27.58,0,0,0,3.12-1.57l3.34-1.9v5.42l-2.57,1.5a15.26,15.26,0,0,1-6.48,1.71c-.3,0-.62,0-1,.05s-.68,0-1,0"
        fill={colorClasses.c2}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.path>
      <motion.path
        className={clsx("choice_logo letter_e", letterClasses?.e)}
        d="M153.71,4.58V.16h-9A17.11,17.11,0,0,0,134,3.5,10.34,10.34,0,0,0,129.8,12a10.42,10.42,0,0,0,4.27,8.52,16.86,16.86,0,0,0,10.68,3.3h9V19.39h-9A10.6,10.6,0,0,1,138,17.32a6.43,6.43,0,0,1-2.22-3.11h17.91V9.79h-17.9a6.55,6.55,0,0,1,2.25-3.15,10.48,10.48,0,0,1,6.7-2.06v0h9Z"
        fill={colorClasses.e}
        initial="hidden"
        animate="visible"
        variants={blink}
      ></motion.path>
    </svg>
  )
}
