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
                <Container>
                    <div className="row row-cols-2">
                        <div className="col">
                            <h2>Your tasks</h2>
                        </div>
                        <div className="col">
                            <Link to="/todo-create">
                                <button type="button" className="w-50 btn btn-lg btn-outline-primary">
                                    Create task
                                </button>
                            </Link>
                        </div>
                    </div>
                </Container>
                {todos.map(todo =>
                    <Card key={todo.id} style={{margin: '20px'}}>
                        <Card.Header>{todo.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>{todo.description}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        )
    }
}

export default TodoList;