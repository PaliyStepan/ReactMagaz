import React from "react";
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import "./Bookcard.sass"
import {NavLink} from "react-router-dom";

const BookCard = (book) => {
    const {title, author, price, image, addToCart, addedCount, id} = book;
    // const cl = 'primary';
    return (
        <Card>
            <NavLink to={`/book/${id}`} className="card-link">
                <div className="card-img">
                    <Image src={image}/>
                </div>
                <Card.Content>
                    <Card.Header>
                        {title}
                    </Card.Header>
                    <Card.Meta>
                    <span className='date'>
                        {author}
                    </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                        <Icon name='rub' />
                        {price}
                </Card.Content>
            </NavLink>
            {/*<Button onClick={addToCart.bind(this, book)} className={ addedCount > 0 && cl}>*/}
            <Button onClick={addToCart.bind(this, book)} >
                Добавить в корзину {addedCount > 0 && `(${addedCount} )`   }
            </Button>
        </Card>
    )

};

export default BookCard;
