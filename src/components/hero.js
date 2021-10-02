import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroVideo from "../assets/liberzen.mp4";
const Video = () => {
    return (
        <Wrapper className="section-center">
            <article className="img-container">
                <video
                    className="video-content"
                    src={HeroVideo}
                    playsInline
                    muted={true}
                    autoPlay={true}
                    loop
                />
            </article>
            <article className="content">
                <h1>
                    LIBERZEN <br />
                </h1>
                <div className="underline" />
                <p>
                   <strong>Live</strong> your dream. <br />
                   <strong>Wear</strong> your Passion.<br />
                    You can get it with Liberzen, <br />
                </p>
                <Link to="/products" className="btn hero-btn">
                    contact us
                </Link>
            </article>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    margin-top: 3rem;
    min-height: 80vh;
    .main-img {
        width: 100%;
        height: 240px;
    }
    .video-content {
        max-width: 100%;
        max-height: 100%;
        box-shadow: -3px 7px 42px -1px rgba(0, 0, 0, 0.69);
        -webkit-box-shadow: -3px 7px 42px -1px rgba(0, 0, 0, 0.69);
        -moz-box-shadow: -3px 7px 42px -1px rgba(0, 0, 0, 0.69);
    }
    .accent-img {
        display: none;
    }
    .img-container {
        width: 100%;
        display: block;
        position: relative;
        margin-bottom: 4rem;
    }
    .content {
        width: 100%;
        height: 50%;
    }

    .underline {
        width: 8rem;
        height: 0.25rem;
        margin-bottom: 1.25rem;
        background: var(  --back-dark);
    }

    p {
        line-height: 2;
        max-width: 45em;
        margin-bottom: 2rem;
        color: var(--clr-grey-5);
        font-size: 1rem;
    }
    @media (min-width: 992px) {
        margin-top: 0rem;
        height: calc(100vh - 5rem);
        grid-template-columns: 2fr 1fr;
        gap: 8rem;
        display: grid;
        place-items: center;
        h1 {
            margin-bottom: 2rem;
        }
        p {
            font-size: 1.25rem;
        }
        .hero-btn {
            width:70%;
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
        }
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .img-container {
            width: 40vw;
            height: 80%;
            display: flex;
            align-items: center;
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
    }
`;
export default Video;
