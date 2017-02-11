import axios from "axios";

export const TODO_ADD = "todo/add";
export const TODO_TOGGLE = "todo/toggle";
export const ERROR = "todo/error";

export const loadTodos = () => {
	return dispatch => {
        axios.get("http://localhost:3030/todos/")
        .then(function (response) {
            dispatch({
            	type: TODO_ADD,
            	payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
            	type: ERROR,
            	payload: error
            });
        });
	}
}

export const todoAdd = (text) => {
    return (dispatch) => {
        const todo = {
            text,
            completed: false
        };
        axios.post("http://localhost:3030/todos/", todo)
        .then(function (response) {
            dispatch({
                type: TODO_ADD,
                payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        });
    }
};

export const todoToggle = (todo) => {
    return (dispatch) => {
        const tod = {...todo, completed: !todo.completed};
        axios.put("http://localhost:3030/todos/" + todo.id, tod)
        .then(function (response) {
            dispatch({
                type: TODO_TOGGLE,
                id: todo.id
            });
        })
        .catch(function (error) {
            dispatch({
                type: ERROR,
                payload: error
            })
        });
    }
};