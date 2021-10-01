import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { links } from "../utils/constans";

const NavList = ({closeSidebar,pathname}) => {
    return <>
        {links.map(item=>{
            const {id,text,url}=item;
            return(
                <Li current={pathname===url} onClick={closeSidebar} key={id}>
                    <Link to={url}>
                        {text}
                    </Link>
                </Li>
            )
        })}
    </>
};

const Li = styled.li`
    border-bottom:2px solid ${props=>props.current?"white":"transparent"}
`;

export default NavList;