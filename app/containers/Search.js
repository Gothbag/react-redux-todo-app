import React from 'react'
import { connect } from 'react-redux'
import { keywordSet } from "../actions/keyword";
import FontAwesome from "react-fontawesome";

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
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    if (searchActive) {
                        dispatch(keywordSet(""));
                        this.setState({ input : ""});
                    } else {
                        dispatch(keywordSet(this.state.input));
                    }
                }}>
                    <input value={this.state.input} onChange={e => {
                        this.setState({ input : e.target.value});
                    }} onKeyPress={ev => {
                        if(ev.key == "Enter") { 
                            ev.preventDefault();
                            dispatch(keywordSet(this.state.input));
                        } 
                    }}/>
                    <button type="submit">
                        <FontAwesome name={searchActive ? "close" : "search"}/>
                    </button>
                </form>
            </div>
        );
    }
    
};

const mapStateToProps = (state) => ({
    keyword: state.keyword
}); 

export default connect(mapStateToProps)(Search);