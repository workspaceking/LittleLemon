import React from 'react';

export default function Header({ children }) {
  return (
    <section className="max-w-[1296px] w-full gap-2xl  justify-center items-center flex">
      {children}
    </section>
  );
}
