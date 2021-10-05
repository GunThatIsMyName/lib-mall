import React, { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { Filters, Modal, PageHero, ProductList, Sort } from '../components';

const ProductsPage = () => {
  const {pathname} = useLocation();
  return (
    <main>
      <Modal />
        <PageHero pathname={pathname} />
      <Wrapper className="page">
        <div className="section-center products">
        <Filters  />
          <div>
            <Sort />
            <ProductList pathname={pathname} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;