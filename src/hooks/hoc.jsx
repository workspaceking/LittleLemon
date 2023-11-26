import React from 'react';
import { Layout } from '@app/layouts/index';

export const WithLayout = (WrappedComponent) => (
  <Layout>
    <WrappedComponent />
  </Layout>
);
