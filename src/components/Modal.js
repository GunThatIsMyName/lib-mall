import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import { IoMdClose } from "react-icons/io";

const Modal = () => {
    const { isModalOpen, closeModal, monthData, showPhoto, handleClick } =
        useGlobalContext();
    const currentImage = monthData.find((item) => item.id === showPhoto.id);
    return (
        <Wrapper onClick={handleClick}>
            {monthData && (
                <div className={`modal ${isModalOpen && "openModal"}`}>
                    <div>hello</div>
                    <div className="box">
                        <img
                            className="modal-image"
                            src={currentImage ? currentImage.url : ""}
                            alt="name"
                        />
                        <button onClick={closeModal} className="close-btn">
                            <IoMdClose />
                        </button>
                    </div>
                </div>
            )}
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .modal {
        background-color: #000000ce;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        visibility: hidden;
        width: 100%;
        height: 100%;
    }
    .openModal {
        z-index: 999;
        visibility: visible;
    }
    .box {
        margin: 3rem auto 0 auto;
        width: 50vw;
        position: relative;
        .modal-image {
            width: 100%;
        }
    }
    .close-btn {
        position: absolute;
        width: 3rem;
        height: 2rem;
        right:0px;
        background-color:white;
        border:none;
        border-radius:4px;
        font-size:2rem;
        cursor: pointer;
        &:hover{
            color:red;
            transform:scale(1.04)
        }
    }
    @media (min-width: 776px) {
        .box {
            margin-top: 2rem;
            width: 55vw;
            height: 50vh;
        }
    }
    @media (min-width: 1256px) {
        .box {
            margin-top: 1rem;
            width: 35vw;
            height: 50vh;
        }
    }
`;

export default Modal;
