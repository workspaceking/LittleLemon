import { fetchAPI, submitAPI } from '@app/api';
import { CardContainer, InputCard, SelectCard } from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import { DataContext, LocalStorage } from '@app/store';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BookingForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [time_slots, setTimeSlots] = useState([]);

  const { actions, data } = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    guests: 1,
    date: '',
    time: '',
    occassion: '',
  });

  function updateTimes(date) {
    actions.initializeTimes(date ?? new Date());
  }

  useEffect(() => {
    setTimeSlots(
      data.times.map((slot, i) => ({
        value: slot,
        label: slot,
      })),
    );
  }, [data.times]);

  return (
    <Layout childAsHero={true}>
      <form
        data-testid="_bookingForm"
        onSubmit={(e) => {
          e.preventDefault();
          if (onSubmit) {
            onSubmit();
          } else {
            actions.update.bookings({
              occassion: formData.occassion,
              date: formData.date,
              time: formData.time,
              guests: formData.guests,
            });
            submitAPI(formData);
            // navigate('/confirmBooking');
          }
        }}
        className="flex justify-center items-start self-stretch  gap-2xl py-2xl"
      >
        <div className="flex flex-col justify-start items-center self-stretch  gap-2xl">
          <CardContainer title={'Contact Information'}>
            <InputCard
              type={'text'}
              name={'name'}
              label={'Name'}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  name: value,
                });
              }}
            />
            <InputCard
              type={'email'}
              name={'email'}
              label={'Email'}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  email: value,
                });
              }}
            />
            <InputCard
              type={'tel'}
              name={'phone_number'}
              label={'Phone'}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  phone_number: value,
                });
              }}
            />
          </CardContainer>
          <CardContainer title={'Payment'}>
            <InputCard
              type={'tel'}
              name={'card_number'}
              placeholder={'Card Number'}
              onChange={(value) => {
                setFormData({
                  ...formData,
                  card_number: value,
                });
              }}
            />

            <div className="flex w-full gap-lg items-center">
              <InputCard
                type={'text'}
                name={'expiry'}
                placeholder={'Expiry'}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    expiry: value,
                  });
                }}
              />
              <InputCard
                type={'number'}
                name={'cvv'}
                placeholder={'CVV'}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    cvv: value,
                  });
                }}
              />
            </div>
          </CardContainer>
        </div>
        <CardContainer>
          <InputCard
            type={'number'}
            name={'guests'}
            label={'Number Of Guests'}
            onChange={(value) => {
              setFormData({
                ...formData,
                guests: value,
              });
            }}
          />
          <InputCard
            onChange={(value) => {
              const newValue = new Date(value).toLocaleDateString();
              updateTimes(new Date(value));
              setFormData({
                ...formData,
                date: newValue,
              });
            }}
            type={'date'}
            name={'date'}
            label={'Date'}
          />

          {time_slots.length > 0 && (
            <SelectCard
              name={'time'}
              label={'Time'}
              onSelect={({ value, index }) => {
                setFormData({
                  ...formData,
                  time: value,
                });
              }}
              options={time_slots}
            />
          )}

          <SelectCard
            name={'occassion'}
            label={'Occassion'}
            onSelect={({ value, index }) => {
              setFormData({
                ...formData,
                occassion: value,
              });
            }}
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
              data-testid="bookingFormBtn"
              type={'submit'}
              name="click me!"
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
