import React, { Fragment } from "react";
import "./App.scss";
import Items from "./components/items";
import AppBar from "./components/appbar";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Details from "./components/details";
import BreadCrumb from "./components/breadcrumb";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <AppBar />
        <BreadCrumb />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:id" component={Details} />
        <Redirect from="*" to="/" />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
