import React from "react";
import {Button, Card} from "react-bootstrap";
import TaskFilter from "./TaskFilter";

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

    handleClick(task, e) {
        console.log(task.username);
        e.preventDefault();

        fetch('/todos/complete?id=' + task.id, {
            method: 'PUT',
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                return json;
            });
    }

    render() {
        const {todos} = this.state;
        const tasks = todos.reverse().filter(function (task) {
            return task.completed === false;
        });

        return (
            <div className="w-100">
                <TaskFilter/>
                {tasks.map(task =>
                    <Card
                        key={task.id}
                        style={{margin: '20px'}}>
                        <Card.Header>
                            <h3>{task.title}</h3>
                            Author: {task.username}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {task.description}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={(e) => this.handleClick(task, e)}>
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