import React from 'react'
import { connect } from 'react-redux'
import { todoAdd } from "../actions/todos";
import { FormControl, FormGroup, InputGroup, ListGroupItem } from "react-bootstrap";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        const { dispatch } = this.props;
        return (
            <ListGroupItem>
                <InputGroup>
                    <FormControl className="new-todo" placeholder="Type a new task and press [ENTER]" componentClass="input" value={this.state.value}
                    onChange={this.handleChange} onKeyPress={ev => {
                        if(ev.key == "Enter") { 
                            dispatch(todoAdd(this.state.value));
                            this.setState({ value : "" });
                        } 
                    }} />
                </InputGroup>
            </ListGroupItem>
        );
    }
    
}
export default connect()(AddTodo)