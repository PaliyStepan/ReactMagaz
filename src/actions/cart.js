import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART} from "./actionTypes";

export const addToCart = obj => ({
    type: ADD_TO_CART,
    payload: obj
});

export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: id
});


export const clearCart = () => ({
    type: CLEAR_CART
});
