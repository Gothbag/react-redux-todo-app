import React from 'react'
import { connect } from 'react-redux'
import { todoAdd } from "../actions/todos";

var AddTodo = ({ dispatch }) => {
    var input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return;
                }
                dispatch(todoAdd(input.value));
                input.value = '';
            }}>
                <input ref={node => {input = node}} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
export default connect()(AddTodo)