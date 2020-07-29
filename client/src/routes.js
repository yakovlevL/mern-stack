import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";
import {HomePage} from "./pages/HomePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path='/about' exact component={AboutPage} />
                <Route path='/home' exact component={HomePage} />
                <Route path='/detail' exact component={DetailPage} />
                <Redirect to='/home' />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/' exact component={AuthPage} />
            <Redirect to='/' />
        </Switch>
    )
}