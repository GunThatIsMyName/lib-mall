import React from "react";
import styled from "styled-components";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import logoBeige from "../assets/logo-beige.png";
const Label = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>LABEL</h2>
                <div className="underline"></div>
                <div className="section-center featured">
                    <div className="logo-info">
                        <img src={logoBlack} alt="gold-logo" />
                        <div className="logo-desc">
                            <h3>Black Label</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="logo-info">
                        <img src={logoWhite} alt="gold-logo" />
                        <div className="logo-desc">
                            <h3>White Label</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="logo-info">
                        <img src={logoBeige} alt="black-logo" />
                        <div className="logo-desc">
                            <h3>Beige Label</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: #f3f3ee;
    .title {
        h2 {
            letter-spacing: 4px;
        }
    }
    .featured {
        margin: 4rem auto;
        img {
            max-height: 105px;
            width: 40%;
            margin-bottom: 1rem;
        }
    }
    .logo-info {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .logo-desc {
            p {
                margin: 0;
            }
        }
    }
    .logo-info:first-child {
        padding-bottom: 1rem;
    }
    .logo-info:last-child {
        padding-top: 1rem;
    }
    .logo-info:nth-child(2) {
        padding: 2rem 0;
        border-bottom: 3px dotted black;
        border-top: 3px dotted black;
    }
    .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: var(--back-dark);
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    @media (min-width: 576px) {
        .logo-info {
            flex-direction: row;
        }
    }
`;

export default Label;
