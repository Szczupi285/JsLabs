import React from 'react';

const RatingBar = ({ rate }) => {
  const stars = Array.from({ length: 10 }, (_, index) => {
    return (
      <span key={index} style={{ fontSize: 50, color: index < rate ? 'gold' : 'lightgray' }}>
        ★
      </span>
    );
  });

  return <div>{stars}</div>;
};

export default RatingBar;