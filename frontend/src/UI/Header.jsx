import React from 'react';
import logo from "../logo.svg";
import {Link} from "react-router-dom";
import {Input} from "reactstrap";

const Header = () => {
    return (
        <div>
            <header className="p-3 bg-dark text-white">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <img src={logo} alt="logo" height={32} width={40}/>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to={"/main"} className="nav-link px-2 text-white">Home</Link></li>
                            <li><Link to={"/todos"} className="nav-link px-2 text-white">Tasks</Link></li>
                            <li><Link to={"/about"} className="nav-link px-2 text-white">Features</Link></li>
                            <li><Link to={"/about"} className="nav-link px-2 text-white">About</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <Input type="search" className="form-control form-control-dark" placeholder="Search..."
                                   aria-label="Search"/>
                        </form>

                        <div className="text-end">
                            <Link to={"/registration"}>
                                <button type="button" className="btn btn-outline-light me-2">Login</button>
                            </Link>
                            <Link to={"/registration"}>
                                <button type="button" className="btn btn-primary">Sign-up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;