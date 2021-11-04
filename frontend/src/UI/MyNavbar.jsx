import logo from './../logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from "reactstrap";
import {Link} from "react-router-dom";

class MyNavbar extends React.Component {

    render() {
        return (
            <Navbar className={"row p-0"}>
                <Nav className={"bg-dark w-100"}>
                    <div className="container-fluid d-inline-flex w-100">
                        <img src={logo} alt="logo" height={70} width={70}/>
                        <Button className={"bg-black m-2"}>Registration</Button>
                    </div>
                </Nav>
            </Navbar>
        )
    }
}

export default MyNavbar;