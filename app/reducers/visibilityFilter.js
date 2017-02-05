import { VISIBILITY_FILTER_SET } from "../actions/visibilityFilter";

const visibilityFilter = (state = "ALL", action) => {
	switch (action.type) {
		case VISIBILITY_FILTER_SET:
            return action.filter;
            break;
        default:
			return state;
	}
}

export default visibilityFilter;