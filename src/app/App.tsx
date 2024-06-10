import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './providers';
import './styles/index.scss';

export const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}
