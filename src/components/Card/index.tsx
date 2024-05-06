import React from 'react';
import './style.css';

interface CardStyle {
  children: React.ReactNode;
  isClicable?: boolean;
  active?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardStyle> = ({
  children,
  isClicable,
  active,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`card-container ${isClicable ? 'card-clicable' : ''} ${
      active ? 'card-active' : ''
    }`}
  >
    {' '}
    {children}
  </div>
);

export default Card;
