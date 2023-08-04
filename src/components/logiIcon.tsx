import clsx from 'clsx';
import React from 'react';

// Tell webpack this JS file uses this image

export default function LogoIcon({
  className,
  classNameMark,
  classNameType,
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
}) {
  return (
    <div style={{ width: 'auto', height: '40px', }} className={className}>
      <svg width="100%" height="100%" viewBox="0 0 125 89" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="80.2925" cy="35.7667" rx="43.7959" ry="34.3068" transform="rotate(1.54932 80.2925 35.7667)" fill="#EBC76A" />
        <path d="M87.5855 81.7473L71.0448 43.8753L117.812 53.5652L87.5855 81.7473Z" fill="#EBC76A" />
        <ellipse cx="45.5195" cy="34.3095" rx="45.5195" ry="34.3095" transform="matrix(-0.999088 -0.0427053 -0.0461325 0.998935 94.1216 3.88794)" fill="#8C535A" />
        <path d="M43.3608 84.7243L63.3198 48.1296L14.1133 54.4566L43.3608 84.7243Z" fill="#8C535A" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M65.4823 67.9116C48.2565 62.8841 36.1039 49.7078 36.513 34.5827C36.8846 20.8413 47.5227 9.2666 62.5684 4.19751C80.6289 9.42792 93.2431 22.9142 92.539 38.161C91.9125 51.7274 80.9118 63.0057 65.4823 67.9116Z" fill="#78823F" />
      </svg>
    </div >
  );
}
