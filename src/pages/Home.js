import React from "react";
import { Company, Hero, Label, Main, Timeline, Work } from "../components";
import Touch from "../components/touch";

const Home = ()=>{
    return <>
        <Hero />
        <Company />
        <Label />
        <Work />
        <Main />
        <Timeline />
        <Touch />
    </>
}

export default Home;