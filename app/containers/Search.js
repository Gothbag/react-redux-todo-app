import React from 'react'
import { connect } from 'react-redux'
import { keywordSet } from "../actions/keyword";
import FontAwesome from "react-fontawesome";

var Search = ({ dispatch, keyword }) => {
    var input;
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch(keywordSet(input.value));
            }}>
                <input ref={node => { input = node }} />
                <button type="submit">
                    <FontAwesome name={keyword !== "" ? "search" : "close"}/>
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    keyword: state.keyword
});    

export default connect()(Search);