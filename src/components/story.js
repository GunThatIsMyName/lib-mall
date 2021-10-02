import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/year2017.jpeg";

const Story = () => {
    return (
        <main>
            <Wrapper className="page section section-center">
                <img src={aboutImg} className="" alt="nice desk" />
                <article>
                    <div className="title">
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto voluptates possimus deleniti nulla maiores.
                        Mollitia doloremque quo, sed dolore temporibus nam hic
                        voluptatum consequuntur magnam, veritatis ad ipsa ipsam
                        dolor?
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.section`
    display: grid;
    gap: 4rem;
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        img {
            height: 650px;
        }
    }
`;

export default Story;
