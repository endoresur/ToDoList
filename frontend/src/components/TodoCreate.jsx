import React from 'react';
import {Container, Form} from "reactstrap";

class TodoCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            newTitle: "",
            newDescription: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

    }

    render() {
        return (
            <div className="text-center">
                <Container className="align-content-center mt-5">
                    <Form className="mx-auto w-50">
                            <h1 className="h2 mb-3 fw-normal">Create new task</h1>

                            <div className="form-floating mb-2">
                                <input className="form-control" placeholder="Title"/>
                                    <label htmlFor="floatingTitle">Title</label>
                            </div>
                            <div className="form-floating mb-2">
                                <textarea className="form-control" placeholder="Description"/>
                                    <label htmlFor="floatingDescription">Description</label>
                            </div>

                            <button className="w-100 btn btn-lg btn-primary" type="submit">Create</button>
                            <p className="mt-5 mb-3 text-muted">Some useful information</p>
                    </Form>
                </Container>
            </div>
        )
    }

}

export default TodoCreate;