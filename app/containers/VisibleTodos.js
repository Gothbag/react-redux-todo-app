import { connect } from "react-redux";
import { todoToggle } from "../actions/todos";
import Todos from "../components/Todos";
import { getVisibleTodos } from "../selectors";

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
        dispatch(todoToggle(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todos);