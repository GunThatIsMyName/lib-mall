import React from "react";
import styled from "styled-components";
import { ImArrowDown } from "react-icons/im";
import fashion1 from "../assets/year2018.jpeg";

const Company = () => {
    return (
        <Wrapper className="section">
            <div className="title">
                <h2>Company</h2>
                <div className="underline"></div>
                <div className="section-center featured">
                    <div className="logo-info">
                        <img src={fashion1} alt="black-logo" />
                        <div className="logo-desc">
                            <h3>Founded | 2021 . 08</h3>
                            <h3>CEO | 서 미 령</h3>
                            <br />
                            <p>
                                liberty + Citizen <br />
                                <ImArrowDown />
                                <br />
                                <span>LIBERZEN</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    background: #202124;
    color: white;
    */ .title {
        h2 {
            letter-spacing: 4px;
        }
    }

    .featured {
        margin: 4rem auto;
        img {
            width: 300px;
            height: 400px;
            border-radius: 10px;
            box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
            -webkit-box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
            -moz-box-shadow: 0px -1px 17px 5px rgba(255, 255, 255, 0.75);
        }
    }
    h2 {
        display: none;
        color: white;
    }

    .logo-info {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p {
            margin: 30px;
            font-size: 25px;
            color: #f4f3ee;
            font-weight: bold;
        }
    }
    .logo-info:first-child {
        margin-bottom: 4rem;
    }
    .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        margin-top: 2rem;
        background: #f4f3ee;
    }
    .btn {
        display: block;
        width: 148px;
        margin: 0 auto;
        text-align: center;
    }
    .logo-desc {
        margin-top: 3rem;
        span{
            letter-spacing:0.4rem;
            color:gray;
        }
    }
    @media (min-width: 576px) {
        .featured {
        }
        .logo-info {
            flex-direction: row;
        }
        h2,
        .underline {
            display: block;
        }
    }
`;

export default Company;
