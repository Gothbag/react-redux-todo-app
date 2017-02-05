import { createSelector } from 'reselect'

const getVisibilityFilter = (state) => state.visibilityFilter;
const getKeyword = (state) => state.keyword;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
    [ getVisibilityFilter, getKeyword, getTodos ],
    (visibilityFilter, keyword, todos) => {
        switch (visibilityFilter) {
            case "ALL":
                return todos.filter(t => t.text.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            case "TODO":
                return todos.filter(t => !t.completed && t.text.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
            case "DONE":
                return todos.filter(t => t.completed && t.text.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        }
    }
);