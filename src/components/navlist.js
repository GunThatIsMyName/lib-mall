import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/constans";

const NavList = () => {
    return <>
        {links.map(item=>{
            const {id,text,url}=item;
            return(
                <li key={id}>
                    <Link to={url}>
                        {text}
                    </Link>
                </li>
            )
        })}
    </>
};

export default NavList;