import { fetchAPI } from '@app/api';
import { CardContainer, InputCard, SelectCard } from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import { useEffect, useState } from 'react';

export const BookingForm = ({ onSubmit }) => {
  const [time_slots, setTimeSlots] = useState([]);

  function initializeTimes(date) {
    return fetchAPI(date ?? new Date()).map((slot, i) => ({
      value: slot,
      label: slot,
    }));
  }

  function updateTimes(date) {
    setTimeSlots(initializeTimes(date));
  }
  useEffect(() => {
    setTimeSlots(initializeTimes());
  }, []);

  return (
    <Layout childAsHero={true}>
      <form
        data-testid="_bookingForm"
        onSubmit={onSubmit}
        className="flex justify-center items-start self-stretch  gap-2xl py-2xl"
      >
        <div className="flex flex-col justify-start items-center self-stretch  gap-2xl">
          <CardContainer title={'Contact Information'}>
            <InputCard type={'text'} name={'name'} label={'Name'} />
            <InputCard type={'email'} name={'email'} label={'Email'} />
            <InputCard type={'tel'} name={'phone_number'} label={'Phone'} />
          </CardContainer>
          <CardContainer title={'Payment'}>
            <InputCard
              type={'tel'}
              name={'phone_number'}
              placeholder={'Card Number'}
            />

            <div className="flex w-full gap-lg items-center">
              <InputCard type={'text'} name={'expiry'} placeholder={'Expiry'} />
              <InputCard type={'number'} name={'expiry'} placeholder={'CVV'} />
            </div>
          </CardContainer>
        </div>
        <CardContainer>
          <InputCard
            type={'number'}
            name={'expiry'}
            label={'Number Of Guests'}
          />
          <InputCard
            onChange={(value) => {
              updateTimes(new Date(value));
            }}
            type={'date'}
            name={'date'}
            label={'Time & Date'}
          />

          {time_slots.length > 0 && (
            <SelectCard
              label={'Time'}
              onSelect={({ value, index }) => {}}
              options={time_slots}
            />
          )}

          <SelectCard
            label={'Occasion'}
            onSelect={({ value, index }) => {}}
            before={base64Data.drink}
            after={base64Data.chevronDown}
            options={[
              {
                label: 'Occassion',
                value: 'occassion',
              },
              {
                label: 'Anniversary',
                value: 'anniversary',
              },
              {
                label: 'Birthday',
                value: 'birthday',
              },
            ]}
          />
          <div className="flex justify-center items-center  w-[220px] relative px-6 py-4 rounded bg-secondary">
            <button
              type={'submit'}
              className=" text-lg font-medium text-left text-dark"
            >
              Reserve a Table
            </button>
          </div>
        </CardContainer>
      </form>
    </Layout>
  );
};

BookingForm.propTypes = {};
