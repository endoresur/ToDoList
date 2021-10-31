import React from "react";

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
        //this.remove = this.remove.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('/todos');
        const body = await response.json();
        this.setState({todos: body});
    }

    render() {
        const {todos} = this.state;
        return(
            <div>
                <h2>Todo List</h2>
                {todos.map(todo =>
                        <div key = {todo.id}>
                            {todo.title} ({todo.description})
                        </div>
                    )}
            </div>
        )
    }
}

export default UserList;