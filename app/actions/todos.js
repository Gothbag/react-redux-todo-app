export const TODO_ADD = "todo/add";
export const TODO_TOGGLE = "todo/toggle";

export const loadTodos = () => {

}

export const todoAdd = (text) => ({
    type: TODO_ADD,
    text
});

export const todoToggle = (id) => ({
    type: TODO_TOGGLE,
    id
});