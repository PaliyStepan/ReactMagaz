import React from "react";
import {Menu, Popup, List, Button, Image, Icon} from "semantic-ui-react";
import "./Menu.sass";
import {Link, NavLink} from "react-router-dom";

const CartComponent = ({title, id, image, removeFromCart }) => (
    <List  selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button color="red" onClick={removeFromCart.bind(this, id)}>Удалить</Button>
            </List.Content>
            <Image avatar src={image} />
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
);


const MenuComponent = ({totalPrice, count, items}) => (
    <Menu className="main-nav">
        <Link to={'/'}  className="logo">
            <Icon name='home' size='large' />
        </Link>

        <Menu.Menu position='right'>
            <Menu.Item className="main-nav__price">
                Итого: <b>{totalPrice}</b> руб.
            </Menu.Item>

            <Popup
                trigger={
                    <Menu.Item >
                        Корзина (<b> {count}</b>)
                    </Menu.Item>
                }
                content={  items.length > 0
                    ?
                    <div className="cart-inner">
                        {items.map((book,i)=> <CartComponent key={i}{...book} /> )}
                        <NavLink to={'/cart'} className="cart-inner__link">
                            Перейти в корзину
                        </NavLink>
                    </div>
                    : <p>Корзина пуста </p>  }
                on="click"
            />


        </Menu.Menu>
    </Menu>
);

export default MenuComponent;