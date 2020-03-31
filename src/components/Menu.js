import React from "react";
import {Menu, Popup, List, Button, Image} from "semantic-ui-react";
import  "./Menu.sass";

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
        <a href="#" className="logo">
            Магазин книг
        </a>

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
                // content={    }
                content={  items.length > 0 ? items.map(book => <CartComponent{...book} /> )  : <p>Корзина пуста </p>  }
                on="click"
                hideOnScroll

            />


        </Menu.Menu>
    </Menu>
);

export default MenuComponent;