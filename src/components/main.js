import React from 'react';
import styled from 'styled-components';
import {Error} from '../pages';
import { Link } from 'react-router-dom';
import { years } from '../utils/constans';
import { Product } from '.';

const Main = () => {
  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   console.log(error, 'error2');
  //   return <Error />;
  // }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>리버젠 작품</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          {years &&
            years
              .map((item) => {
                return <Product key={item.id} {...item} />;
              })}
        </div>
      </div>
      <Link to="/shop " className="btn shop-btn">
        더 많은 제품들 보러가기
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .shop-btn {
    display: block;
    width:148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .shop-btn{
      font-size:1.5rem;
  width:15%;
  }
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default Main;