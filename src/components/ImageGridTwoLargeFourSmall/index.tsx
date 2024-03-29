import React from 'react';

import { ImageGridTwoLargeFourSmallWrapper, LargeChildWrapper, SmallChildWrapper, BackgroundImage, HoverWrapper } from './styles';

interface GridProps {
  className?: string;
  gap?: string;
  rowHeight?: number;
  fullWidth?: boolean;
}

export const ImageGridTwoLargeFourSmall: React.FC<GridProps> = ({ className = '', fullWidth = false, gap, rowHeight, children }) => {
  return (
    <ImageGridTwoLargeFourSmallWrapper className={className} gap={gap} rowHeight={rowHeight} fullWidth={fullWidth}>
      {children}
    </ImageGridTwoLargeFourSmallWrapper>
  );
};

interface ChildProps {
  backgroundFluid?: any;
  backgroundFixed?: any;
  backgroundImgStyle?: any;
  backgroundAlt?: string;
  background?: string;
  hasHover?: boolean;
  hoverColor?: string;
  className?: string;
}

export const LargeChild: React.FC<ChildProps> = ({
  children,
  className = '',
  backgroundFixed,
  backgroundFluid,
  backgroundImgStyle,
  backgroundAlt = 'fullwidth image',
  background = '',
  hasHover,
  hoverColor,
}) => {
  return (
    <LargeChildWrapper className={`ImageGrid-LargeChild ${className}`} background={background}>
      {backgroundFluid ? (
        <BackgroundImage
          fluid={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      {backgroundFixed ? (
        <BackgroundImage
          fixed={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </LargeChildWrapper>
  );
};

export const SmallChild: React.FC<ChildProps> = ({
  children,
  className = '',
  backgroundFixed,
  backgroundFluid,
  backgroundImgStyle,
  backgroundAlt = 'fullwidth image',
  background = '',
  hasHover,
  hoverColor,
}) => {
  return (
    <SmallChildWrapper className={`ImageGrid-SmallChild ${className}`} background={background}>
      {backgroundFluid ? (
        <BackgroundImage
          fluid={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      {backgroundFixed ? (
        <BackgroundImage
          fixed={backgroundFluid}
          alt={backgroundAlt}
          imgStyle={{ objectFit: 'cover', objectPosition: 'center center', ...backgroundImgStyle }}
        />
      ) : null}
      <HoverWrapper hoverColor={hoverColor} hasHover={hasHover}>
        {children}
      </HoverWrapper>
    </SmallChildWrapper>
  );
};
