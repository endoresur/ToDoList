import React from "react";

class UserList extends React.Component {
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
            <div className={"container m-5 w-75"}>
                <h2>TODOS</h2>
                {todos.map(todo =>
                    <div className={"card m-3"}>
                        <div className={"card-body"}>
                            <div key={todo.id}>
                                <h5 className="card-title">{todo.title}</h5>
                                <p className="card-text">({todo.description})</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default UserList;