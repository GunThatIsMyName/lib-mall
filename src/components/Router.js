import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar } from ".";
import { About, Contact, ErrorPage, Home, Shop } from "../pages";


const Router = ()=>{
    return(
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                {/* <Route path="/shop" component={Shop} /> */}
                <Route path="/contact" component={Contact} />
                <Route path="*" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router;