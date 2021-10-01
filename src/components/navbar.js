import React from "react";
import { Link,withRouter } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { NavList } from ".";
import { useGlobalContext } from "../context/AppContext";
const Navbar = ({location:{pathname}}) => {
    const {openSidebar}=useGlobalContext();
    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <h1>LIBERZEN</h1>
                    </Link>
                    <button type="button" onClick={openSidebar} className="nav-toggle">
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <NavList pathname={pathname}/>
                </ul>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    background-color: teal;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }
    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 175px;
            margin-left: -15px;
        }
    }
    .nav-toggle {
        background: transparent;
        border: transparent;
        color: var(--clr-primary-5);
        cursor: pointer;
        svg {
            font-size: 2rem;
        }
    }
    .nav-links {
        display: none;
    }
    .cart-btn-wrapper {
        display: none;
    }
    @media (min-width: 992px) {
        .nav-toggle {
            display: none;
        }
        .nav-center {
            display: grid;
            /* justify-content:space-between; */
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            li {
                margin: 0 0.5rem;
            }
            a {
                color: var(--clr-grey-3);
                font-size: 1rem;
                text-transform: capitalize;
                letter-spacing: var(--spacing);
                padding: 0.5rem;
            }
        }
    }
`;

export default withRouter(Navbar);
