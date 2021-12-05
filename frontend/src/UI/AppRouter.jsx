import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Error from "../pages/Error";
import Registration from "../components/Registration";
import TaskCreate from "../components/TaskCreate";
import Tasks from "../pages/Tasks";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/main" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="/tasks" component={Tasks}/>
            <Route path="/error" component={Error}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/todo-create" component={TaskCreate}/>

            <Redirect from="/" to="/main"/>
            <Redirect to="/error"/>
        </Switch>
    );
};

export default AppRouter;