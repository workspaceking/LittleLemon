import {
  Alert,
  Dish,
  DishShimmer,
  Shimmer,
  Testimonial,
  TestimonialShimmer,
} from '@components/index';
import { Arrow, Badge } from '@elements/index';
import { foodBase64, storage } from '@data/index';
import { Layout } from '@app/layouts';
import { HomeHero } from '@app/components/pages';
import { useEffect, useState } from 'react';
import { useSectionVisibility } from '@app/hooks';

export const Home = (props) => {
  const [recipesRef, recipeVisibility] = useSectionVisibility(0.5);
  const [testimonialsRef, testimonialVisibility] = useSectionVisibility(0.5);

  const [dishes, setDishes] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  // const [loading]
  useEffect(() => {
    document.title = 'Home';
    return () => {};
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (recipeVisibility && dishes.length === 0) {
        setDishes(storage.dishes);
      }
      if (testimonialVisibility && testimonials.length === 0) {
        setTestimonials([...Array(6).fill(0, 0, 6)]);
      }
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [recipeVisibility, testimonialVisibility]);

  return (
    <Layout Hero={HomeHero}>
      <>
        <section
          ref={recipesRef}
          data-testid="_top_recipes"
          aria-labelledby={'recipes-heading'}
          className="vstack justify-start items-start min-w-[325px] sectionContainer relative  gap-6 p-6 rounded-2xl border-4 border-gray"
        >
          <h2
            id={'recipes-heading'}
            className="text-3xl font-bold text-left capitalize text-black"
          >
            Top Recipes
          </h2>
          {dishes.length === 0 ? (
            <div className="w-full">
              <DishShimmer />
            </div>
          ) : (
            <div className="vstack justify-center w-full items-center gap-6">
              <div className=" lg:hstack justify-between items-center self-stretch ">
                <div className="wrap  sm:nowrap justify-center items-center  gap-3">
                  {Object.keys(foodBase64).map((v, i) => (
                    <Badge
                      key={i}
                      imageBase64={foodBase64[v]}
                      label={v.toLocaleUpperCase()}
                    />
                  ))}
                </div>
                <div className="hstack justify-end items-center ">
                  <div className="hstack justify-end items-center  gap-6">
                    <Arrow direction={'left'} />
                    <Arrow direction={'right'} negative={false} active />
                  </div>
                </div>
              </div>
              <div className="w-full place-items-center  grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-6">
                {dishes.map(({ title, image, excerpt, ratings, price }, i) => (
                  <Dish
                    key={i}
                    image={image}
                    ratings={ratings}
                    data={{
                      title,
                      price,
                      ratings,
                      excerpt,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        {/* About */}
        <section
          id={'about'}
          aria-labelledby={'about-heading'}
          data-testid="_about"
          className="vstack lg:flex lg:flex-row w-full md:nowrap justify-between items-center  sectionContainer lg:h-sm_vh p-0 lg:p-6 rounded-2xl bg-gray border-0 lg:border-4 border-gray"
        >
          <div className="vstack w-full lg:w-auto justify-center items-center relative h-full gap-6 p-6 rounded-2xl bg-primary">
            <div className="vstack justify-between  gap-3 items-center relative">
              <h2
                id={'about-heading'}
                className=" text-3xl leading-10 font-medium text-left text-secondary"
              >
                Little Lemon
              </h2>
              <p className="text-2xl font-bold  leading-8 text-left text-gray">
                Chicago
              </p>
            </div>
            <p className="max-w-[375px] text-base text-justify text-gray">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="vstack  hidden lg:flex justify-between items-center  h-[445px] relative p-6">
            <div className=" w-[470px] h-[445px]">
              <img
                alt={'our chiefs'}
                src="./assets/images/chiefs.png"
                className="w-[282px] h-[344px] absolute left-[210px] top-[-2px] rounded-[10px] object-cover border-4 border-secondary"
              />
              <img
                alt={'our cheif'}
                src="./assets/images/chief.png"
                className="w-[282px] h-[344px] absolute bottom-0 rounded-[10px] object-cover border-4 border-secondary"
              />
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section
          ref={testimonialsRef}
          data-testid="_testimonials"
          aria-labelledby={'testimonials-heading'}
          className="vstack  sectionContainer h-fit   gap-6 p-6 rounded-2xl  border-4 border-gray"
        >
          <h2
            id={'testimonials-heading'}
            className="text-3xl font-bold text-left capitalize text-dark"
          >
            Testimonials
          </h2>
          {testimonials.length === 0 ? (
            <div className="w-full">
              <TestimonialShimmer />
            </div>
          ) : (
            <div className="lg:flex lg:flex-row justify-start items-start  relative gap-6">
              <div className="justify-center items-center wrap gap-3xl">
                {Array(6)
                  .fill(0, 0, 6)
                  .map((_, i) => (
                    <Testimonial key={i} />
                  ))}
              </div>
              <div className={'hidden lg:block'}>
                <Testimonial large={true} />
              </div>
            </div>
          )}
        </section>
      </>
      <Alert />
    </Layout>
  );
};

Home.propTypes = {};
