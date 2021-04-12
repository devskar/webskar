import React from 'react';
import { useScreenType } from '../hooks/getScreenType';
import Navbar from './navbar/Navbar';

interface Props {}

export const Header: React.FC<Props> = () => {
  const screenType = useScreenType();

  return <Navbar />;
};

export default Header;
