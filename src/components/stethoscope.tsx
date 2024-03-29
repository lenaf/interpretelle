import clsx from 'clsx';
import React from 'react';

// Tell webpack this JS file uses this image

export default function Stethoscope({
  className,
  classNameMark,
  classNameType,
}: {
  className?: string;
  classNameMark?: string;
  classNameType?: string;
}) {
  return (
    <div style={{ width: 'auto', height: '80px', }} className={className}>
      <svg fill="#000000" width="100%" height="100a%" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><title>gavel</title><path d="M59,27.27l-10,10a3.66,3.66,0,0,1-5.18-.07,3.7,3.7,0,0,1-.56-4.56l-4.4-4.4-3.57,3.58A3.84,3.84,0,0,1,34.17,35L18.61,50.54a3.87,3.87,0,0,1-5.48-5.48L28.68,29.52a3.91,3.91,0,0,1,4.23-.85l3.18-3.18-4.4-4.4a3.72,3.72,0,0,1-4.63-5.74l10-10A3.72,3.72,0,0,1,42.79,10L54.33,21.54A3.72,3.72,0,0,1,59,27.27Z" /></svg>
    </div >
  );
}
