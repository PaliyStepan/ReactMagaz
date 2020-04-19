import React from "react";
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import Book from "../components/Book/Book";
import * as cartActions from "../actions/cart";
import uniqBy from "lodash/uniqBy";
import {connect} from "react-redux";

const BookContainer = (props) =>{
    const id = +props.match.params.id;
    let bookItem;
    if(props.isReady) {
        bookItem = props.books.filter(book => book.id === id);
        // не имя нормальной БД и server API, сделал такую дич :))
        bookItem = bookItem[0];
    }

    return(
        props.isReady
            ?
            <Book book={bookItem} {...props} />
            : <div>loading</div>
    )

};


const mapStateToProps = ({cart}, {id}) => ({
    items: uniqBy(cart.items, o => o.id )
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
});


const bookWithRouter = withRouter(BookContainer);

export default connect(mapStateToProps,mapDispatchToProps)(bookWithRouter);
