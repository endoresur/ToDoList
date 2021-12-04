import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from "reactstrap";
import {Redirect} from "react-router-dom";

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            success: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();

        fetch('/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
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
                        <Form className="mx-auto w-25" onSubmit={this.handleSubmit}>
                            <h1 className="h2 mb-3 fw-normal">Please sign up</h1>

                            <div className="form-floating">
                                <input
                                    type="username"
                                    name="username"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="floatingInput">Username</label>
                            </div>

                            <div className="form-floating">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me"/> Remember me
                                </label>
                            </div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
                            <p className="mt-5 mb-3 text-muted">© ImportantTasks</p>
                        </Form>
                    </Container>
                </div>
            )
        }
    }
}

export default Registration;
