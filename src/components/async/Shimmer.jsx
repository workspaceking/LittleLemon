import React from 'react';

function Shimmer({ className, ...props }) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-[#bcbcbc] to-[#c5c5c5] ${className}`}
      role="status"
      aria-live="polite"
      {...props}
    />
  );
}

const DishShimmer = () => {
  return (
    <div className="w-full place-items-center  grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div key={i} className={'vstack gap-3 w-full'}>
          <Shimmer className={'w-full h-24'} />
          <div className="vstack gap-3 w-full">
            <Shimmer className={'h-3'} />
            <Shimmer className={'h-3'} />
            <Shimmer className={'h-3'} />
            <div className="hstack w-full justify-end">
              <Shimmer className={'h-6 w-12'} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TestimonialShimmer = () => {
  return (
    <div className="justify-center items-center wrap gap-3xl">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div
          key={i}
          className={`vstack  w-[225px] bg-white rounded-2xl justify-center items-center gap-6 px-3 py-xl`}
        >
          <Shimmer className={`w-12 h-12 rounded-3xl`} />
          <div className={`vstack gap-3 w-full`}>
            <Shimmer className={`h-3 rounded-md`} />
            <Shimmer className={`h-3 rounded-md`} />
            <Shimmer className={`h-3 rounded-md`} />
            <div className="stack w-full justify-end">
              <Shimmer className={`h-6 w-12 rounded-md`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { DishShimmer, Shimmer, TestimonialShimmer };
