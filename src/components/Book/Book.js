import React from "react";
import  "./Book.sass"

const Book = (props) =>{
    const {book} = props;
    return(
        <div className="Book">
            <div className="Book__grid">
                <div className="Book__img">
                    <img src={book.image} alt={book.title}/>
                </div>
                <div className="Book__info">
                    <h1>
                        {book.title}
                    </h1>
                    <h2>
                        {book.author}
                    </h2>

                    <p className="Book__desc">{book.desc}</p>
                    <div className="Book__buy">
                        <p>{book.price} руб.</p>
                        {/*<button className="ui button" onClick={addToCart.bind(this, book)}>Добавить в корзину</button>*/}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Book;
