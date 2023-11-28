import { Dish, Testimonial } from '@components/index';
import { Arrow, Badge } from '@elements/index';
import { foodBase64 } from '@data/index';
import { Layout } from '@app/layouts';
import { HomeHero } from '@app/components/pages';

export const Home = (props) => {
  return (
    <Layout Hero={HomeHero}>
      <>
        <section
          data-testid="_top_recipes"
          className="flex flex-col justify-start items-start min-w-[425px] max-w-[1296px] relative  gap-12 p-6 rounded-2xl border-4 border-gray"
        >
          <p className=" text-4xl font-bold text-left capitalize text-black">
            Top Recipes
          </p>
          <div className="flex flex-col justify-start items-center gap-6">
            <div className="flex justify-between items-center self-stretch ">
              <div className="flex justify-center items-center  gap-3">
                {Object.keys(foodBase64).map((v, i) => (
                  <Badge
                    key={i}
                    imageBase64={foodBase64[v]}
                    label={v.toLocaleUpperCase()}
                  />
                ))}
              </div>
              <div className="flex justify-end items-center ">
                <div className="flex justify-end items-center  gap-6">
                  <Arrow rotate={0} />
                  <Arrow rotate={180} active />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-start items-start flex-wrap gap-6">
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
          </div>
        </section>
        {/* About */}
        <section
          data-testid="_about"
          className="flex justify-between items-center  w-[1296px] h-sm_vh p-6 rounded-2xl bg-gray border-4 border-gray"
        >
          <div className="flex flex-col justify-center items-center relative h-full gap-6 p-6 rounded-2xl bg-primary">
            <div className="flex flex-col justify-between  gap-6 items-center relative">
              <p className=" text-[64px] leading-10 font-medium text-left text-secondary">
                Little Lemon
              </p>
              <p className="text-[40px]  leading-8 text-left text-gray">
                Chicago
              </p>
            </div>
            <p className=" w-[370px] text-base text-justify text-gray">
              <span className=" w-[370px] text-base text-justify text-gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </span>
              <br />
              <span className=" w-[370px] text-base text-justify text-gray">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.{' '}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between items-center  h-[445px] relative p-6">
            <div className=" w-[470px] h-[445px]">
              <img
                src="./assets/images/chiefs.png"
                className="w-[282px] h-[344px] absolute left-[210px] top-[-2px] rounded-[10px] object-cover border-4 border-secondary"
              />
              <img
                src="./assets/images/chief.png"
                className="w-[282px] h-[344px] absolute left-[22px] top-[101px] rounded-[10px] object-cover border-4 border-secondary"
              />
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section
          data-testid="_testimonials"
          className="flex flex-col  w-[1296px] h-fit   gap-12 p-6 rounded-2xl  border-4 border-gray"
        >
          <p className=" text-4xl font-bold text-left capitalize text-dark">
            Testimonials
          </p>
          <div className="flex justify-start items-start self-stretch flex-grow relative gap-6">
            <div className="flex justify-center items-center flex-wrap gap-3xl">
              {Array(6)
                .fill(0, 0, 6)
                .map((_, i) => (
                  <Testimonial key={i} />
                ))}
            </div>

            <Testimonial large={true} />
          </div>
        </section>
      </>
    </Layout>
  );
};

Home.propTypes = {};
