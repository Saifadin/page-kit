import React from 'react';

import { Wrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
  fullWidth?: boolean;
}

export const ImageGridTwoHalf: React.FC<GridProps> = ({ className = '', fullWidth = false, gap, rowHeight, children }) => {
  return (
    <Wrapper className={className} gap={gap} rowHeight={rowHeight} fullWidth={fullWidth}>
      {children}
    </Wrapper>
  );
};
