import React from 'react';

import { ImageGridTwoHalfWrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
  fullWidth?: boolean;
}

export const ImageGridTwoHalf: React.FC<GridProps> = ({ className = '', fullWidth = false, gap, rowHeight, children }) => {
  return (
    <ImageGridTwoHalfWrapper className={className} gap={gap} rowHeight={rowHeight} fullWidth={fullWidth}>
      {children}
    </ImageGridTwoHalfWrapper>
  );
};
