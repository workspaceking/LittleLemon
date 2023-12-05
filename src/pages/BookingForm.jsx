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
      <div className="vstack justify-start items-center min-w-[325px] w-full max-w-[975px] p-3 rounded-2xl bg-gray border-[10px] border-gray">
        <h1 className="text-3xl font-bold text-left  my-3 capitalize text-dark">
          Book A Table
        </h1>
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
              navigate('/confirmBooking');
            }
          }}
          className="flex flex-col lg:flex-row justify-center items-start gap-2xl py-2xl"
        >
          <div className="vstack justify-start items-center gap-2xl">
            <CardContainer title={'Contact Information'}>
              <InputCard
                type={'text'}
                name={'name'}
                label={'Name'}
                required
                minLength={3}
                errorText={'Please provide a valid name'}
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
                required
                label={'Email'}
                errorText={'Your entered an incorrect email'}
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
                required
                minLength={11}
                errorText={'Please provide a valid contact number'}
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
                required
                errorText={'Please provide a valid card number'}
                placeholder={'Card Number'}
                onChange={(value) => {
                  setFormData({
                    ...formData,
                    card_number: value,
                  });
                }}
              />

              <div className="hstack w-full gap-lg items-center">
                <InputCard
                  type={'text'}
                  name={'expiry'}
                  placeholder={'Expiry'}
                  required
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
                  required
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
          <CardContainer title={'Booking Details'}>
            <InputCard
              type={'number'}
              name={'guests'}
              required
              label={'Number Of Guests'}
              errorText={'There should be at least 1 guest'}
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
              errorText={'Booking date is required'}
              required
              name={'date'}
              label={'Date'}
            />

            {time_slots.length > 0 && (
              <SelectCard
                name={'time'}
                label={'Time'}
                required
                errorText={'Please provide the reach time'}
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
              required
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
            <div className="hstack justify-center items-center  w-[220px] relative px-6 py-4 rounded bg-secondary">
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
      </div>
    </Layout>
  );
};
