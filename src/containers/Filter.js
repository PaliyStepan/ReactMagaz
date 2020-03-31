import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Filter from "../components/Filter";
import * as filterActions from "../actions/filter";


const mapStateToProps = ({books, filter}) => ({
    filterBy: filter.filterBy
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter);




