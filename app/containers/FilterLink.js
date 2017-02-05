import { connect } from "react-redux";
import { visibilityFilterSet } from "../actions/visibilityFilter";
import LinkButton from "../components/LinkButton";

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(visibilityFilterSet(ownProps.filter));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LinkButton);

