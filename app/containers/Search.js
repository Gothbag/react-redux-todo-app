import React from 'react'
import { connect } from 'react-redux'
import { keywordSet } from "../actions/keyword";
import FontAwesome from "react-fontawesome";
import { FormControl, FormGroup, InputGroup } from "react-bootstrap";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    render() {
        const { dispatch, keyword } = this.props;
        const searchActive = keyword + "".trim() !== "";
        return (
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" className="search-text" value={this.state.input} onChange={e => {
                        this.setState({ input : e.target.value});
                    }} onKeyPress={ev => {
                        if(ev.key == "Enter") { 
                            ev.preventDefault();
                            dispatch(keywordSet(this.state.input));
                        } 
                    }}/>
                    <InputGroup.Addon className="search-button" onClick={e => {
                        if (searchActive) {
                            dispatch(keywordSet(""));
                            this.setState({ input : ""});
                        } else {
                            dispatch(keywordSet(this.state.input));
                        }
                    }}>
                        <FontAwesome name={searchActive ? "close" : "search"}/>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
        );
    }
    
};

const mapStateToProps = (state) => ({
    keyword: state.keyword
}); 

export default connect(mapStateToProps)(Search);