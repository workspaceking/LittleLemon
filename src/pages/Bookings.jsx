import { CartItem, Tabs } from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import React, { useState } from 'react';

function Bookings() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout childAsHero={true}>
      <div className="flex flex-col justify-start items-start w-[975px] p-3 rounded-2xl bg-gray border-[10px] border-gray">
        <Tabs
          tabs={[
            {
              label: 'Cart',
              icon: base64Data.cart,
              active: activeTab === 0,
              badge: 1,
            },
            {
              label: 'Orders',
              active: activeTab === 1,
            },
            {
              label: 'Reservations',
              active: activeTab === 2,
            },
          ]}
          onTabChange={(label, index) => {
            console.log(label, index);
            setActiveTab(index);
          }}
        />

        <div className="flex flex-col justify-start items-start w-full gap-2.5 p-2.5 rounded-2xl bg-gray">
          <div className="flex flex-col justify-start items-start w-full gap-2.5">
            <CartItem title={'Salmon Fillet'} quantity={3} price={5.25} />
            <CartItem title={'Greek Meatball Soup'} quantity={4} price={7.25} />
            <CartItem title={'Beef & Veg'} quantity={2} price={1.25} />
          </div>
          <div className="flex flex-col justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
            <p className="w-full text-1.5xl text-left text-primary">
              Order summary
            </p>
            <div className="flex flex-col justify-start items-start w-full gap-2.5 p-2.5">
              <div className="flex justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                <p className="w-max text-xl text-left text-primary">Subtotal</p>
                <div className="flex justify-start items-start relative">
                  <p className="w-xl text-xl text-left text-primary">$</p>
                  <p className="text-xl text-left text-primary">77.95</p>
                </div>
              </div>
              <div className="flex justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                <p className="w-max text-xl text-left text-primary">Delivery</p>
                <div className="flex justify-start items-start relative">
                  <p className="w-xl text-xl text-left text-primary">$</p>
                  <p className="text-xl text-left text-primary">37.95</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full relative">
                <p className="w-full text-1.5xl text-left text-primary">
                  Order total
                </p>
                <div className="flex justify-start items-start relative">
                  <p className="w-xl text-xl text-left text-pink">$</p>
                  <p className="text-xl text-left text-pink">117.90</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full relative overflow-hidden gap-2.5 px-[458px] py-[26px] rounded-bl-2xl rounded-br-2xl bg-primary">
            <p className="text-2xl text-center text-white">Checkout</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Bookings;
