import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import fasion1 from '../assets/show1.jpeg';
import fasion2 from '../assets/show2.jpeg';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Liberzen <br />
        </h1>
        <div className="underline" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          laudantium laborum! Libero laudantium necessitatibus dolore ducimus
          facere mollitia ut, enim doloremque deleniti expedita natus ipsum
          accusantium sunt illo quasi harum.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={fasion1} alt="nice table" className="main-img" />
        <img src={fasion2} alt="person working" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .main-img {
    width: 100%;
    height: 240px;
  }
  .accent-img {
    display: none;
  }

  .underline {
    width: 8rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: teal;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(—radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(—radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: teal;
      bottom: 0%;
      left: -8%;
      border-radius: var(—radius);
    }
  }
`;
export default Hero;