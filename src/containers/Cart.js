import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as cartActions from "../actions/cart";
import Cart from "../components/Cart/Cart";
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = ({cart}, {id}) => ({
    items: uniqBy(cart.items, o => o.id )
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);




