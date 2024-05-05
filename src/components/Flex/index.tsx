import React from 'react';
import './style.css';

interface FlexProps {
  children: React.ReactNode;
  alignItems?:
    | 'normal'
    | 'stretch'
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
}

const Flex: React.FC<FlexProps> = ({
  children,
  justifyContent,
  alignContent,
  alignItems,
}) => {
  return (
    <div
      className='flex-container'
      style={{ justifyContent, alignItems, alignContent }}
    >
      {children}
    </div>
  );
};

export default Flex;
