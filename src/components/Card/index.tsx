import React from 'react';
import './style.css';

interface CardStyle {
  children: React.ReactNode;
  isClicable?: boolean;
  active?: boolean;
  onClick?: () => void;
  testId?: string;
}

const Card: React.FC<CardStyle> = ({
  children,
  isClicable,
  active,
  onClick,
  testId
}) => (
  <div
    onClick={onClick}
    data-testid={testId || 'card-container'}
    className={`card-container ${isClicable ? 'card-clicable' : ''} ${
      active ? 'card-active' : ''
    }`}
  >
    {' '}
    {children}
  </div>
);

export default Card;
