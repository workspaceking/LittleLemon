import React from 'react';
import { FindFoodHero } from './FindFoodHero';
import { Link } from 'react-router-dom';

export function HomeHero() {
  return (
    <section
      className={'vstack items-center  gap-2xl  w-full rounded-lg  xs:p-6'}
    >
      <div className="vstack justify-start items-center hstack gap-sm">
        <h1 className="text-secondary leading-normal text-title font-medium font-['Markazi Text']">
          Little Lemon
        </h1>
        <p className="text-surface text-leadtext font-normal font-['Markazi Text']">
          Chicago
        </p>
      </div>
      <p className="text-surface w-full min-w-[325px] max-w-[768px] text-base text-center font-normal font-['Karla']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <FindFoodHero />
    </section>
  );
}
