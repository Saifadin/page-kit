import React from 'react';
import { Link } from 'gatsby';

import { ButtonWrapper } from './styles';

export const Button = ({ children, type = 'button', appearance = 'light', fullWidth = false, ...rest }: any) => {
  return (
    <ButtonWrapper appearance={appearance} type={type} fullWidth={fullWidth} {...rest}>
      {children}
    </ButtonWrapper>
  );
};

export default ButtonWrapper;

export const ButtonLink = ({ children, appearance = 'light', fullWidth = false, ...rest }: any) => {
  return (
    <Button as={Link} appearance={appearance} fullWidth={fullWidth} {...rest}>
      {children}
    </Button>
  );
};
