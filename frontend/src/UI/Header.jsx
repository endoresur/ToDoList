import logo from './../logo.svg';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Button} from "reactstrap";

class Header extends React.Component {

    render() {
        return (
            <Navbar className={"p-0 w-100"}>
                <Nav className={"bg-dark w-100"}>
                    <div className={"container w-100 d-flex"}>
                        <div className="w-100">
                            <img src={logo} alt="logo" height={70} width={70}/>
                            1234
                            Qwerty
                        </div>
                        <div className={"ms-auto p-1 w-25 flex-shrink-1"}>
                            <Button className={"btn btn-primary p-2 m-2"}>Sign in</Button>
                        </div>
                    </div>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;