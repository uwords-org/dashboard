import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <div>
      <h1><Link to="/">Uwords</Link></h1>
      <Link to="/companies">Компании</Link>
      <Link to="/users">Пользователи</Link>
    </div>
  )
}
