import React from "react";
import {NavLink} from "react-router-dom";
import  "./Cart.sass";
import CartItem from "./CartItem/CartItem";
import { Icon } from 'semantic-ui-react';
const Cart = (props) => {
    const {items,clearCart} = props;
    return(
        <div className='cart'>
            <NavLink to={'/'} icon="search">
                Вернуться на главную
            </NavLink>
            <h1 className="cart__title">
                Корзина
                {
                    items.length > 0
                        ?
                        <div className="cart__clear" onClick={clearCart}>
                         <span>очистить корзину</span>
                         <Icon link name='close' />
                         </div>
                        : null
                }
            </h1>
            <div className="cart__inner">
                {
                    items.length > 0 ?
                        items.map((item, index) => {
                                return(
                                    <CartItem key={index} {...item} />
                                )
                            } )
                        : <p> Ваша корзина пуста.</p>
                }
            </div>

        </div>
    )
};

export  default Cart;
