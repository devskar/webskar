import React from 'react';
import { pages } from '../utils/const';
import Navbar from './Navbar';

interface Props {}

export const Header: React.FC<Props> = () => {
  return <Navbar pages={pages} />;
};

export default Header;
