import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: rgba(39, 43, 51, 0.6);
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function Header() {
  return (
    <StyledHeader role='banner'>
      Send a Chuck Norris joke to the user email addresses
    </StyledHeader>
  );
}
export default Header;
