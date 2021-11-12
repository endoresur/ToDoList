import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import TodoList from "../components/TodoList";
import Error from "../pages/Error";
import Registration from "../components/Registration";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/todos" component={TodoList}/>
            <Route path="/error" component={Error}/>
            <Route path="/registration" component={Registration}/>
            <Redirect from="/" to="/main"/>
            <Redirect to="/error"/>
        </Switch>
    );
};

export default AppRouter;