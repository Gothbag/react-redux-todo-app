import React, { PropTypes } from "react";
import Todo from "./Todo";

const Todos = ({ todos, onTodoClick }) => (
    <div>
        {todos.map(todo =>
            <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            />
        )}
    </div>
);

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
};

export default Todos;