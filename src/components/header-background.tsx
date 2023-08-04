import clsx from 'clsx';
import React from 'react';
import { useEffect, useState } from 'react';
import Logo from './logo';
import { NavLink } from './ui';

export default function HeaderBackground() {
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    setScrolledDown(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Trigger handler on mount to account for reloads
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Background */}
      <div
        className={clsx([
          'absolute inset-0 bg-white bg-opacity-90 backdrop-blur-lg backdrop-filter duration-500',
          scrolledDown ? 'opacity-100' : 'opacity-0',
        ])}
      />

      {/* Logo */}
      <NavLink to="/">
        <div
          className={clsx(
            'absolute bottom-0 left-1/2 top-0 flex w-[50px] -translate-x-1/2 items-center',
            'lg:w-[65px]',
          )}
        >
          <Logo
            className="h-auto w-full" />
        </div>
      </NavLink>
    </div>
  );
}
