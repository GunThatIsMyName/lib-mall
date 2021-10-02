import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoGold from "../assets/logoGold.png";
import logoBlack from "../assets/logoBlack.png";
const Label = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>LABEL</h2>
                <div className="underline"></div>
                <div className="section-center featured">
                    <div className="logo-info">
                        <img src={logoGold} alt="gold-logo" />
                        <div className="logo-desc">
                            <h3>Beige Label</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="logo-info">
                        <img src={logoBlack} alt="black-logo" />
                        <div className="logo-desc">
                            <h3>Black Label</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: var(--clr-grey-9);
    .title {
        h2 {
            letter-spacing: 4px;
        }
    }
    .featured {
        margin: 4rem auto;
        img {
            height: 105px;
        }
    }
    .logo-info {
        width:80%;
        margin:0 auto;
        display: flex;
        flex-direction:column;
        justify-content: space-around;
        align-items: center;
        .logo-desc{
            p{
                margin:0;
            }
        }
    }
    .logo-info:first-child {
        margin-bottom:2rem;
    }
    .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: #a0a4a8;
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    @media (min-width: 576px) {
        .featured {
            /* grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); */
        }
        .logo-info {
flex-direction:row;
    }
    }
`;

export default Label;
