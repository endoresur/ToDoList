import React from 'react';
import {Container, Form} from "reactstrap";
import {Redirect} from "react-router-dom";

class TaskCreate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: "",
            title: "",
            description: "",
            completed: false,
            success: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/todos/createByName?userName=' + this.state.username, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                completed: this.state.completed
            })
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                return json;
            })

        this.setState({success: true});
    }

    render() {
        const success = this.state.success;
        if(success) {
            return (<Redirect to="/main"/>);
        }
        else {
            return (
                <div className="text-center">
                    <Container className="align-content-center mt-5">
                        <Form className="mx-auto w-50" onSubmit={this.handleSubmit}>
                            <h1 className="h2 mb-3 fw-normal">Create new task</h1>

                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}/>
                                <label htmlFor="floatingUserId">Username</label>
                            </div>

                            <div className="form-floating mb-2">
                                <input
                                    className="form-control"
                                    placeholder="Title"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}/>
                                <label htmlFor="floatingTitle">Title</label>
                            </div>

                            <div className="form-floating mb-2">
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleInputChange}/>
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

}

export default TaskCreate;