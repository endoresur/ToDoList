import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Container} from "reactstrap";

class Registration extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="text-center">
                <Container className="align-content-center mt-5">
                    <Form className="mx-auto w-25">
                        <h1 className="h2 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput"
                                   placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword"
                                   placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me"/> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© ImportantTasks</p>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default Registration;
