import { TODO_ADD, TODO_TOGGLE } from "../actions/todos";

let id = 1;
const todo = (state = [], action) => {
	switch (action.type) {
		case TODO_ADD:
			return {
				id: id++,
			    text: action.text,
			    completed: false
		    };
		    break;
		case TODO_TOGGLE:
		    if (state.id !== action.id) {
			    return state;
		    }
		    return {...state, completed: !state.completed};
		    break;
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case TODO_ADD:
			return [ //we're simply concatenating the state array and the new todo
				...state,
				todo(undefined, action)
			]
			break;
		case TODO_TOGGLE:
            return state.map(d => todo(d, action));
            break;
        default:
			return state;
	}
}

export default todos;