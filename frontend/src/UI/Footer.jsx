import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {

    render() {
        return(

        <footer className={"footer bg-dark pb-0"}>
            <div className={"container"}>
                <span className="text-muted">Place sticky footer content here.</span>
            </div>
        </footer>

        );
    }
}

export default Footer;