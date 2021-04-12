import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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

export const Navbar: React.FC<Props> = () => {
  const links = useMemo(() => createLinks(items), []);
  return <div className="navbar">{links}</div>;
};

export default Navbar;
