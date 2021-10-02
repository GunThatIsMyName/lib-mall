import React from 'react';
import styled from 'styled-components';
import { storesData } from '../utils/constans';
import { Stores } from '.';

const Store = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
        <div className="section-center featured">
          {storesData &&
            storesData
              .map((item) => {
                return <Stores className="product" key={item.id} {...item} />;
              })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .product{
     border:10px solid
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

export default Store;