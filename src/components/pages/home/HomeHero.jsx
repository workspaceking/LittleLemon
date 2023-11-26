import React from 'react';
import { FindFoodHero } from './FindFoodHero';

export function HomeHero() {
  return (
    <>
      <section className="flex-col justify-start items-start gap-3xl flex max-w-min">
        <div className="flex-col justify-start items-start gap-2xl flex">
          <h1 className="text-secondary leading-8 text-4xl font-medium font-['Markazi Text']">
            Little Lemon
          </h1>
          <p className="text-surface text-2xl font-normal font-['Markazi Text']">
            Chicago
          </p>
        </div>
        <p className="w-96 text-surface text-base font-normal font-['Karla']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <FindFoodHero />
      </section>
      <section
        aria-details={'Background Image'}
        className="w-xs_vw h-[436px] bg-[url(https://via.placeholder.com/375x438)] flex justify-center items-end  rounded-2xl border-4 border-secondary"
      >
        <button className=" px-6 mb-4xl  py-2 w-fit h-fit bg-surface rounded-3xl text-primary text-lg font-medium font-['Karla']">
          Reserve a Table
        </button>
      </section>
    </>
  );
}
