import {
  Dish,
  FilterCard,
  FindFoodHero,
  InputCard,
  DishShimmer,
  Alert,
} from '@app/components';
import { base64Data, storage } from '@app/data';
import { useSectionVisibility } from '@app/hooks';
import { Container, Layout } from '@app/layouts';
import { DataContext } from '@app/store';
import React, { useContext, useEffect, useState } from 'react';

export default function FindFood() {
  const [recipesRef, recipeVisibility] = useSectionVisibility(0.5);
  const [dishes, setDishes] = useState([]);

  const { actions, data } = useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (recipeVisibility && dishes.length === 0) {
        setDishes(storage.dishes);
      }
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [recipeVisibility]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      actions.update.requestFood(false);
    }, 800);
    return () => {
      clearTimeout(timeout);
    };
  }, [data.request.food]);

  useEffect(() => {
    document.title = 'Menu';
    return () => {};
  }, []);

  return (
    <Layout Hero={FindFoodHero}>
      <Container bordered={false}>
        <div className="vstack justify-start items-start w-full  lg:w-[325px] relative gap-9 p-6 rounded-3xl bg-gray">
          <h2 className="text-3xl font-bold text-left capitalize text-dark">
            Filters
          </h2>
          <div className="flex flex-wrap lg:flex-row justify-start items-start self-stretch gap-3 lg:gap-9">
            <FilterCard
              onClick={() => {
                actions.update.requestFood(true);
              }}
              title={'Sort by'}
              filters={[
                { label: 'Ratings' },
                { label: 'Fastest delivery' },
                { label: 'Near' },
                { label: 'Distance' },
              ]}
            />
            <FilterCard
              onClick={() => {
                actions.update.requestFood(true);
              }}
              title={'Quick filters'}
              filters={[{ label: 'Rated' }, { label: 'Top Restaurant' }]}
            />
            <FilterCard
              onClick={() => {
                actions.update.requestFood(true);
              }}
              title={'Offers'}
              filters={[
                { label: 'Accepts Vouchers' },
                { label: 'Deals' },
                { label: 'Free delivery' },
              ]}
            />

            <FilterCard
              title={
                <InputCard
                  name={'cusines'}
                  label={'Cusines'}
                  type={'text'}
                  size={'sm'}
                  border={'gray'}
                  rounded={'full'}
                  placeholder={'search'}
                />
              }
              filters={[
                { label: 'American' },
                { label: 'Deals' },
                { label: 'BBQ' },
                { label: 'Chinese' },
                { label: 'Beverages' },
                { label: 'Cakes & Bakery' },
              ]}
            />

            <FilterCard
              title={'Price'}
              filters={[{ label: '$' }, { label: '$$' }, { label: '$$$' }]}
            />

            <div className="hstack justify-between w-full items-center">
              <button className="hstack justify-center items-center  min-w-[108px] text-sm text-primary relative gap-2.5 p-3 rounded-3xl bg-surface hover:bg-danger hover:text-surface">
                Clear all
              </button>
              <button className="hstack justify-center items-center  min-w-[108px] relative gap-2.5 p-3 text-sm rounded-3xl bg-secondary hover:bg-primary hover:text-surface   ">
                Save
              </button>
            </div>
          </div>
        </div>

        <div
          className={'w-full flex flex-col lg:flex lg:flex-row'}
          ref={recipesRef}
          aria-live={'polite'}
        >
          {dishes.length === 0 || data.request.food ? (
            <DishShimmer />
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
          )}
        </div>
      </Container>
      <Alert />
    </Layout>
  );
}
