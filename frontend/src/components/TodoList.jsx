import React from "react";
import {Button, Card, Col, Row} from "react-bootstrap";

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
            <div className={"container m-4 p-4"}>
                <h2>Your tasks</h2>
                {todos.map(todo =>
                    <Card key={todo.id} style={{width: '50rem', margin: '20px'}}>
                        <Card.Header>{todo.title}</Card.Header>
                        <Card.Body>
                            <Card.Text>{todo.description}</Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}

export default TodoList;