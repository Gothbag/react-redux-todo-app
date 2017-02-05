import React, { PropTypes } from "react";
import Todo from "./Todo";
import { ListGroup } from "react-bootstrap";

const Todos = ({ todos, onTodoClick }) => (
    <ListGroup>
        {todos.map(todo =>
            <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ListGroup>
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