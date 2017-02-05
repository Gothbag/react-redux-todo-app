import { KEYWORD_SET } from "../actions/keyword";

const keyword = (state = "", action) => {
	switch (action.type) {
		case KEYWORD_SET:
            return action.keyword
            break;
        default:
			return state;
	}
}

export default keyword;