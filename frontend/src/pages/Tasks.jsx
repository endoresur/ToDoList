import React from 'react';
import {Container} from "reactstrap";
import {Link} from "react-router-dom";
import TaskList from "../components/TaskList";

const Tasks = () => {

    return (
        <Container className={"m-4 p-4"}>
            <div className="container">

                <Container className="row g-4 py-5 row-cols-1 row-cols-lg-3 pb-2 border-bottom">
                    <div className="feature col">
                        <h2 className="">Active tasks</h2>
                    </div>
                    <div className="feature col"/>
                    <div className="feature col">
                        <Link to="/todo-create">
                            <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                Create task
                            </button>
                        </Link>
                    </div>
                </Container>
                <TaskList/>
            </div>
        </Container>
    );


};

export default Tasks;