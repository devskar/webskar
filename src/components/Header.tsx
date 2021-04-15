import React from 'react';
import { pages } from '../utils/const';
import { useScreenType } from '../utils/hooks/getScreenType';
import Navbar from './navbar/Navbar';
import Navmenu from './navbar/Navmenu';

interface Props {}

export const Header: React.FC<Props> = () => {
  const screenType = useScreenType();

  return <Navbar pages={pages} />;
};

export default Header;
