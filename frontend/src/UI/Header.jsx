import logo from './../logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from "reactstrap";

class Header extends React.Component {

    render() {
        return (
            <Navbar className={"p-0"}>
                <Nav className={"bg-dark w-100"}>
                    <div className="container">
                        <img src={logo} alt="logo" height={70} width={70}/>
                        1234
                        Qwerty
                    </div>
                    <Button className={"bg-black m-2"}>Registration</Button>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;