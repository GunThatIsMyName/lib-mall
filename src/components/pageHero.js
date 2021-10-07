import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const PageHero = () => {
  const {pathname}=useLocation();
  return (
    <Wrapper>
      <div className="section-center">
        <h3> {pathname.substr(6)} collection
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: #F4F3EE;
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  h3{
    margin:0;
    font-size:1rem;
  }
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  @media (min-width: 992px) {
    h3{
      font-size:2rem;
    }
  }
`;

export default PageHero;