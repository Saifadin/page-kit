import React from 'react';
import { SectionWrapper, SectionContent, SectionDescription, SectionSubTitle, SectionTitle } from './styles';

interface SectionProps {
  fullWidth?: boolean;
  className?: string;
  contentClassName?: string;
}

const Section: React.FunctionComponent<SectionProps> = ({ children, fullWidth, className, contentClassName }) => {
  return (
    <SectionWrapper className={className}>
      <SectionContent className={contentClassName} fullWidth={fullWidth}>
        {children}
      </SectionContent>
    </SectionWrapper>
  );
};

export { Section, SectionDescription, SectionSubTitle, SectionTitle };
