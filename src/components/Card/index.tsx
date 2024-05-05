import React from 'react';
import './style.css';

interface CardStyle {
  children: React.ReactNode;
  isClicable?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardStyle> = ({ children, isClicable, onClick }) => (
  <div
    onClick={onClick}
    className={`card-container ${isClicable ? 'card-clicable' : ''}`}
  >
    {' '}
    {children}
  </div>
);

export default Card;
