import { fetchAPI, submitAPI } from '@app/api';
import {
  BookingForm,
  CardContainer,
  InputCard,
  SelectCard,
} from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import { DataContext, LocalStorage } from '@app/store';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BookingPage = ({ onSubmit }) => {
  return (
    <Layout childAsHero={true}>
      <div className="vstack justify-start items-center min-w-[325px] w-full max-w-[975px] p-3 rounded-2xl bg-gray border-[10px] border-gray">
        <h1 className="text-3xl font-bold text-left  my-3 capitalize text-dark">
          Book A Table
        </h1>
        <BookingForm />
      </div>
    </Layout>
  );
};
