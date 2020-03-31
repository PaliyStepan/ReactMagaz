import React from "react";
import { Input, Menu } from 'semantic-ui-react';
import './Filter.sass'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery}) => {

    return (
        <Menu secondary className="filter-menu">
            <Menu.Item
                active={filterBy === 'all'}
                onClick={setFilter.bind(this, 'all')}
            >
                Все
            </Menu.Item>
            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={setFilter.bind(this, 'price_high')}
            >
                Цена(дорогие)
            </Menu.Item>
            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={setFilter.bind(this, 'price_low')}
            >
                Цена(дешвые)
            </Menu.Item>
            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={setFilter.bind(this, 'author')}
            >
                Автор
            </Menu.Item>
            <Menu.Item className="search-box">
                <Input placeholder="Введите запрос" icon="search"
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}
                />
            </Menu.Item>
        </Menu>
    )
};

export default Filter;