import React from 'react';

export default function Header({ children }) {
  return (
    <section className="sectionContainer gap-2xl  justify-center items-center hstack">
      {children}
    </section>
  );
}
