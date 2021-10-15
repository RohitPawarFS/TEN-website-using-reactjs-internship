import React from 'react';
import { MenuItems } from '../MenuItems';
import { Link } from 'react-router-dom';

export default function More() {

  return (
    <div>
    <Link to={MenuItems.path}  >{MenuItems.title}</Link>
    <button >We are hiring</button>
    </div>
  );
}