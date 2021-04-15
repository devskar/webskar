import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { Page } from '../../utils/const';
import './Navbar.css';

interface Props {
  pages: Page[];
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

export const Navbar: React.FC<Props> = ({ pages }) => {
  const links = useMemo(() => createLinks(pages), [pages]);
  return <div className="navbar">{links}</div>;
};

export default Navbar;
