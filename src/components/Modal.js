import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context/AppContext";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

const Modal = () => {
    const { isModalOpen ,closeModal,monthData,showPhoto} = useGlobalContext(); 
    const currentImage = monthData.find(item=>item.id === showPhoto)

    return (
        <Wrapper>
            {monthData && 
            <div className={`modal ${isModalOpen && "openModal"}`}>
                <div>hello</div>
                <div className="box">
                    <img src="" alt="" />
                    <div className="slide-btn left-btn">
                        <AiOutlineDoubleLeft />{" "}
                    </div>
                    <div className="slide-btn right-btn">
                        <AiOutlineDoubleRight />
                    </div>
                    <button onClick={closeModal} className="close-btn">
                        <IoMdClose />
                    </button>
                </div>
            </div>
            }
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
        width: 70vw;
        height: 60vh;
        background-color: white;
        position: relative;
    }
    .slide-btn {
        color: red;
        background-color: #181818;
        padding:0.5rem;
        border-radius:0.25rem;
        position: absolute;
        top: 50%;
    }
    .left-btn {
        left: 0;
    }
    .right-btn {
        right: 0;
    }
    .close-btn {
        position: absolute;
        width: 3rem;
        height: 2rem;
        bottom: -5rem;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 776px) {
        .box {
            margin-top: 5rem;
            width: 55vw;
            height: 60vh;
        }
    }
`;

export default Modal;
