import React, { PropTypes } from "react";
import Todo from "./Todo";

class Todos extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (typeof this.props.loadTodos === "function") {
            this.props.loadTodos();
        }
    }
    render() {
        const { todos, onTodoClick } = this.props;
        return (
            <div>
                {todos.map(todo =>
                    <Todo
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo)}
                    />
                )}
            </div>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default Todos;