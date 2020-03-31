import React from "react";
import "./CartItem.sass";
import { Icon } from 'semantic-ui-react'

const CartItem = ({image,title, author,removeFromCart,id}) => {
    //console.log(clearCart)
  return(
      <div className="CartItem">
          <div className="CartItem__grid">
              <div className="CartItem__left">
                  <img src={image} alt={title}/>
              </div>
              <div className="CartItem__right">
                  <h2>{title}</h2>
                  <h3>
                      {author}
                  </h3>
                  <Icon link name='close' onClick={removeFromCart.bind(this, id)}/>
              </div>
          </div>
      </div>
  )
};
export default CartItem;