import { connect } from "react-redux";
import { loadTodos, todoToggle } from "../actions/todos";
import Todos from "../components/Todos";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (todo) => {
        dispatch(todoToggle(todo));
    },
    loadTodos: () => {
        dispatch(loadTodos());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);