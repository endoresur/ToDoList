import logo from "../logo.svg";

import React from "react";
import {Button, Card} from "react-bootstrap";
import {Container} from "reactstrap";
import {Link} from "react-router-dom";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    async componentDidMount() {
        const response = await fetch('/todos');
        const body = await response.json();
        this.setState({todos: body});
    }

    render() {
        const {todos} = this.state;
        return (
            <Container className={"m-4 p-4"}>

                    <div className="container">

                        <Container className="row g-4 py-5 row-cols-1 row-cols-lg-3 pb-2 border-bottom">
                            <div className="feature col">
                                <h2 className="">Active tasks</h2>
                            </div>
                            <div className="feature col"/>
                            <div className="feature col">
                                <Link to="/todo-create">
                                    <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                        Create task
                                    </button>
                                </Link>
                            </div>
                        </Container>

                        {todos.reverse().map(todo =>
                            <Card
                                key={todo.id}
                                style={{margin: '20px'}}>
                                <Card.Header>
                                    <h3>{todo.title}</h3>
                                    Author: {todo.username}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>{todo.description}</Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        )}
                    </div>
            </Container>
        )
    }
}

export default TodoList;