import React from "react";
import styled from "styled-components";
import { ImArrowDown } from "react-icons/im";

import fashion1 from "../assets/show1.jpeg";

const Company = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Company</h2>
                <div className="underline"></div>
                <div className="section-center featured">
                    <div className="logo-info">
                        <div className="logo-desc">
                            <h3>Founded | 2021 . 08</h3>
                            <h3>CEO | 서 미 령</h3>
                            <p>
                                liberty + Citizen <br />
                                <ImArrowDown />
                                <br />
                                <span>
                                    LIBERZEN <br />
                                </span>
                            </p>
                        </div>
                        <img src={fashion1} alt="black-logo" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: #333333;
    color: var(--back-white);
    .title {
        h2 {
            display: none;
            letter-spacing: 4px;
        }
    }
    .featured {
        margin: 4rem auto;
        img {
            width: 300px;
            height: 400px;
            border-radius: 5px;
            box-shadow: rgba(225, 225, 225, 0.1) 0px 8px 24px,
                rgba(225, 225, 225, 0.1) 0px 16px 56px,
                rgba(225, 225, 225, 0.1) 0px 24px 80px;
        }
    }
    .logo-info {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p {
            color: var(--back-white);
            margin: 30px;
            font-size: 25px;
        }
    }
    .logo-info:first-child {
        margin-bottom: 4rem;
    }
    .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: var(--back-white);
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    .logo-desc {
        margin-top: 3rem;
        span {
            color: var(--clr-primary-4);
            letter-spacing: 5px;
        }
    }
    @media (min-width: 576px) {
        .title {
            h2 {
                display: block;
            }
        }
        .logo-info {
            flex-direction: row;
        }
    }
`;

export default Company;
