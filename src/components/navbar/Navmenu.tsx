import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

interface Props {}

export const Navmenu: React.FC<Props> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav-icon">
      <div onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes></FaTimes> : <FaBars></FaBars>}
      </div>
    </div>
  );
};

export default Navmenu;
