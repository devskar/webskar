import React from 'react';
import './Home.css';

interface Props {}

export const Home: React.FC<Props> = () => {
  return (
    <div className="home-page">
      <h1>Oskar Page</h1>
    </div>
  );
};

export default Home;
