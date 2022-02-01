import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ComponentTest from "./pages/componentTest";
import PageLogin from "./pages/pageLogin";
import PageSignUp from "./pages/pageSignUp";

export default function RoutesForGame() {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <PageLogin /> }  path="/" exact />
                <Route element = { <PageSignUp /> }  path="/sign-up" />
                <Route element = { <ComponentTest /> }  path="/home" />
            </Routes>
        </BrowserRouter>
    )
 } 