import React from 'react'
import Item from './Item';

export default function List({items = []}) {
    return (
      <ul className="list-group">
        {items.map((number) => (
          <Item item={number}></Item>
        ))}
      </ul>
    );
}
