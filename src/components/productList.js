import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";

const ProductList = ({ pathname }) => {
  const { fetchData, yearData, isLoading, openModal } = useGlobalContext();
  useEffect(() => {
    fetchData(pathname);
  }, [pathname]);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }
  return (
    <>
      {yearData.length > 1 &&
        yearData.map((item) => {
          const { id, image, month } = item;
          if (image) {
            return (
              <Box key={id}>
                <h1>{month}</h1>
                {image.map((img, idx) => {
                  return (
                    <img
                      className="box-img"
                      onClick={() => openModal(img.id, idx, month)}
                      key={img.id}
                      src={img.url}
                      alt={img.name}
                    />
                  );
                })}
              </Box>
            );
          }
        })}
    </>
  );
};
const Box = styled.section`
  margin: 2rem;
  .box-img{
    background-color:black;
    cursor: pointer;
    &:hover{
      opacity:0.7;
    }
  }
  main {
    background-color: black;
    margin: 1rem;
  }
`;
export default ProductList;
