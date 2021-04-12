import React from 'react';
import './Card.css';

interface Props {
  heading: string;
  subheading: string;
  link: string;
}

const Card: React.FC<Props> = ({ heading, subheading, link }) => {
  return (
    <div className="card">
      <a className="card-link" target="_blank" rel="noreferrer" href={link}>
        <p className="heading">{heading}</p>
        <p className="subheading">{subheading}</p>
      </a>
    </div>
  );
};

export default Card;
