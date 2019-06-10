import React from 'react';

import { EqualColumnsWrapper } from './styles';

interface EqualColumnsProps {
  background?: string;
}

export const EqualColumns: React.FC<EqualColumnsProps> = ({ children, background }) => {
  return <EqualColumnsWrapper background={background}>{children}</EqualColumnsWrapper>;
};
