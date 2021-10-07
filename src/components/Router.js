import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Footer, Navbar, ProductList, Sidebar } from ".";
import { About, Contact, ErrorPage, Home, Shop } from "../pages";


const Router = ()=>{
    return(
        <BrowserRouter>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route exact path="/shop/:id" component={ProductList} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="*" component={ErrorPage} />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
export default Router;