import React from 'react';
import './style.css';

interface FlexProps {
  children: React.ReactNode;
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'center'
    | 'positional alignment'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  alignContent?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';
  gap?: string | number;
}

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignContent,
  alignItems,
  flexWrap,
  gap,
}) => {
  return (
    <div
      className='flex-container'
      style={{ justifyContent, alignItems, alignContent, flexWrap, gap }}
    >
      {children}
    </div>
  );
};

export default Flex;
