import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import TodoList from "../components/TodoList";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Switch>
            <Route path={"/main"}>
                <Main/>
            </Route>
            <Route path={"/about"}>
                <About/>
            </Route>
            <Route path={"/todos"}>
                <TodoList/>
            </Route>
            <Route path={"/error"}>
                <Error/>
            </Route>
            <Redirect to={"/error"}/>
        </Switch>
    );
};

export default AppRouter;