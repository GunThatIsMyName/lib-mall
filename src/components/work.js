import React from 'react';
import styled from 'styled-components';
import {services} from '../utils/constans';

const Work = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <div className="title">
          <h1>Works</h1>
          <div className="underline"></div>
          </div>

        </article>
        <div className="services-center">
          {services.map((service) => {
            const {id, icon, title, text,src} = service;
            return (
              <article key={id} className="service">
                <img className="service-image" src={src} alt={title} />
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
background-color:var(--back-tesla);
  h3,
  h4 {
    color: var(--clr-primary-2);
  }
  padding: 5rem 0;


  .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: var(--back-dark);
    }
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--back-white);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    .service-image{
      width:17rem;
      height:12rem;
      margin-bottom:3rem;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default Work;