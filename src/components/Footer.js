import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: rgba(39, 43, 51, 0.6);
  min-height: 5vh;
  color: #b7b7b7;
`;

const Footer = () => {
  return (
    <StyledFooter role='contentinfo'>
      <p>&copy; 2019 by Martyna Skup</p>
    </StyledFooter>
  );
};

export default Footer;
