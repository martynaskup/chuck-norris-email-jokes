import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  width: 350px;
  padding: 15px 10px;
  margin: 10px auto;
  background-color: rgba(250, 250, 250, 0.2);
  border-radius: 5%;
  font-style: italic;

  @media only screen and (min-width: 410px) {
    max-width: 600px;
  })
`;

const Joke = ({ randomJoke }) =>
  !randomJoke ? '' : <StyledP>{randomJoke}</StyledP>;
export default Joke;
