import React from "react";
import {Button, Card} from "react-bootstrap";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    async componentDidMount() {
        const response = await fetch('/todos');
        const body = await response.json();
        this.setState({todos: body});
    }

    handleClick(todo, e) {
        console.log(todo.username);
        e.preventDefault();

        fetch('/todos/complete?id=' + todo.id, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                return json;
            });

        this.setState({});
    }

    render() {
        const {todos} = this.state;
        return (
            <div>
                {todos.reverse().map(todo =>
                    <Card
                        key={todo.id}
                        style={{margin: '20px'}}>
                        <Card.Header>
                            <h3>{todo.title}</h3>
                            Author: {todo.username}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {todo.description}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={(e) => this.handleClick(todo, e)}>
                                Done?
                            </Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        )
    }
}

export default TaskList;