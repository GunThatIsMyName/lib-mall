import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <Wrapper>
            <h5>
                &copy; {new Date().getFullYear()}
                <span> Liberzen</span>
            </h5>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Liberzen/?ref=nf&hc_ref=ARSUhTBLxKht4m1rAoNEy8wIGe0d_vvtd99aVgyJ31CY6nDFRfsuJOipFv39oN8aEP0&__tn__=%3C-R"
            >
                <FaFacebookSquare className="navbar-info_icon facebook" />
            </a>
            <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/liberzen/"
            >
                <FaInstagram className="navbar-info_icon insta" />
            </a>
            <h5>T : 02-2254-2361</h5>
            <h5>All right reserved</h5>
        </Wrapper>
    );
};
const Wrapper = styled.footer`
    /* height: 5rem; */
    padding: 3rem;
    justify-content: center;
    align-items: center;
    background: teal;
    text-align: center;
    h5 {
        color: var(--clr-white);
        margin: 0.1rem;

        font-weight: 400;
        text-transform: none;
        line-height: 1.25;
    }
    @media (min-width: 776px) {
        flex-direction: row;
    }
`;
export default Footer;
