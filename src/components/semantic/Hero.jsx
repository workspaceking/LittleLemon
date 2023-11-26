import PropTypes from 'prop-types';
import React from 'react';
import { Header } from '@app/elements';

export const Hero = ({ children }) => {
  return <Header>{children}</Header>;
};

Hero.propTypes = {};
