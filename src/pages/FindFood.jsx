import { Dish, FilterCard, FindFoodHero, InputCard } from '@app/components';
import { base64Data } from '@app/data';
import { Container, Layout } from '@app/layouts';
import React from 'react';

export default function FindFood() {
  return (
    <Layout Hero={FindFoodHero}>
      <Container bordered={false}>
        <div className="flex flex-col justify-start items-start  w-[325px] relative gap-9 p-6 rounded-3xl bg-gray">
          <p className=" text-4xl font-bold text-left capitalize text-dark">
            Filters
          </p>
          <div className="flex flex-col justify-start items-start self-stretch  gap-9">
            <FilterCard
              title={'Sort by'}
              filters={[
                { label: 'Ratings' },
                { label: 'Fastest delivery' },
                { label: 'Near' },
                { label: 'Distance' },
              ]}
            />
            <FilterCard
              title={'Quick filters'}
              filters={[
                { label: 'Ratings 4+' },
                { label: 'Top Restaurant', icon: base64Data.ratedBadge },
              ]}
            />
            <FilterCard
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

            <div className="flex justify-between w-full items-center">
              <div className="flex justify-center items-center  min-w-[108px] relative gap-2.5 p-3 rounded-3xl bg-surface">
                <p className=" text-sm text-center text-primary">Clear all</p>
              </div>
              <button className="flex justify-center items-center  min-w-[108px] relative gap-2.5 p-3 rounded-3xl bg-secondary">
                <p className=" text-sm text-center text-primary">Save</p>
              </button>
            </div>
          </div>
        </div>
        <div className="gap-2xl grid grid-cols-4">
          {Array(12)
            .fill(0, 0, 11)
            .map((_, i) => (
              <Dish
                key={i}
                image={
                  'https://thedailydishrestaurant.com/wp-content/uploads/2023/01/Daily-Dish-5-1030x1023.jpg'
                }
                ratings={5}
                data={{
                  title: 'Greek salad',
                  price: 12.99,
                  excerpt:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                }}
              />
            ))}
        </div>
      </Container>
    </Layout>
  );
}
