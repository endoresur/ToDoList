import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Registration extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const response = fetch('/users/reg');
    }

    render() {
        return (
            <div>
                Registration page
            </div>
        );
    }
}

export default Registration;
