import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets';

export const AdminLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}