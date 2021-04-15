import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { visuals } from '../utils/const';

interface Props {}

const createCards = () => {
  const cards: JSX.Element[] = [];

  visuals.forEach(({ name, target }) => {
    cards.push(
      <Link to={target}>
        <Card heading={name} />
      </Link>
    );
  });

  return cards;
};

export const Games: React.FC<Props> = () => {
  const [cards] = useState(() => createCards());

  return (
    <>
      <h2 className="page-title">Visuals</h2>
      {cards}
    </>
  );
};

export default Games;
