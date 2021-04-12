import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useScreenType } from '../hooks/getScreenType';
import { FaBars } from 'react-icons/fa';

interface Props {}

interface Page {
  name: string;
  target: string;
}

const createLinks = (pages: Page[]) => {
  const links: JSX.Element[] = [];

  pages.forEach((page, idx) => {
    links.push(
      <NavLink
        key={idx}
        className="link"
        activeClassName="active"
        exact
        to={page.target}
      >
        {page.name}
      </NavLink>
    );
  });

  return links;
};

const items: Page[] = [
  { name: 'Home', target: '/' },
  { name: 'Projects', target: '/projects' },
];

export const Header: React.FC<Props> = () => {
  const screenType = useScreenType();
  const links = useMemo(() => createLinks(items), []);

  const [menuOpen, setMenuOpen] = useState(false);

  // FOR MOBILE
  if (screenType === 'mobile') {
    if (!menuOpen) {
      return (
        <div className="navbar">
          <FaBars onClick={() => setMenuOpen(true)} />
        </div>
      );
    } else {
      return <div className="navbar"></div>;
    }
  }

  // WHEN NOT ON MOBILE
  return <div className="navbar">{links}</div>;
};

export default Header;
