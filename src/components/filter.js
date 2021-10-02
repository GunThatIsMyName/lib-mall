import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const category = [
    { id: 2014, name: "14년도" },
    { id: 2015, name: "15년도" },
    { id: 2016, name: "16년도" },
    { id: 2017, name: "17년도" },
    { id: 2018, name: "18년도" },
    { id: 2019, name: "19년도" },
    { id: 2020, name: "20년도" },
    { id: 2021, name: "21년도" },
];

const Filters = () => {
    return (
        <Wrapper>
            <div className="content">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-control">
                        <h5>category</h5>
                        <div>
                            {category.length > 1 &&
                                category.map(({ id, name }) => {
                                    return (
                                      <Link to={`/shop/${id}`}>
                                        <button  name="category" key={id}>
                                            {name}
                                        </button>
                                      </Link>
                                    );
                                })}
                        </div>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .form-control {
        margin-bottom: 1.25rem;
        h5 {
            margin-bottom: 0.5rem;
        }
    }
    .search-input {
        padding: 0.5rem;
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        letter-spacing: var(--spacing);
    }
    .search-input::placeholder {
        text-transform: capitalize;
    }

    button {
        display: block;
        margin: 0.25em 0;
        padding: 0.25rem 0;
        text-transform: capitalize;
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        letter-spacing: var(--spacing);
        color: var(--clr-grey-5);
        cursor: pointer;
    }
    .active {
        border-color: var(--clr-grey-5);
    }
    .company {
        background: var(--clr-grey-10);
        border-radius: var(--radius);
        border-color: transparent;
        padding: 0.25rem;
    }
    .colors {
        display: flex;
        align-items: center;
    }
    .color-btn {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background: #222;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            font-size: 0.5rem;
            color: var(--clr-white);
        }
    }
    .all-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 0.5rem;
        opacity: 0.5;
    }
    .active {
        opacity: 1;
    }
    .all-btn .active {
        text-decoration: underline;
    }
    .price {
        margin-bottom: 0.25rem;
    }
    .shipping {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        text-transform: capitalize;
        column-gap: 0.5rem;
        font-size: 1rem;
    }
    .clear-btn {
        background: var(--clr-red-dark);
        color: var(--clr-white);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
    }
    @media (min-width: 768px) {
        .content {
            position: sticky;
            top: 1rem;
        }
    }
`;

export default Filters;
