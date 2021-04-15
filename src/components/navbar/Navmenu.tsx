import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Page } from '../../utils/const';
import './Navmenu.css';

interface Props {
  pages: Page[];
}

export const Navmenu: React.FC<Props> = ({ pages }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-icon">
      <div onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>}
      </div>
    </div>
  );
};

interface Props {}

export const Dropdown: React.FC<Props> = () => {
  return <></>;
};

export default Navmenu;
