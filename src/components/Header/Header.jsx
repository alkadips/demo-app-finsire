import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



export const Header = ({ heading, description }) => {
  return (
    <StyledHeader data-testid="header">
     
      <Heading data-testid="heading">{heading}</Heading>
      {description && (
        <Description data-testid="description">
          {description}
         
        </Description>
      )}
    </StyledHeader>
  );
};

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Header.defaultProps = {
  heading: null,
  description: null,
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
  min-height: 20vh;
  font-size: calc(10px + 4vmin);
  background-color: var(--lightcolor);
  color: var(--darktext);
  padding-top: 25px;
  @media (min-width: 600px) {
    font-weight: bold;
    font-size: calc(10px + 2vmin);
  }
`;



const Heading = styled.p`
  padding: 0;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 0.5em;
  width: 90vw;
  color: var(--lighttext);
  margin-bottom: 10px;
  @media (min-width: 600px) {
    margin-bottom: 0px;
    width: 60vw;
  }
`;

