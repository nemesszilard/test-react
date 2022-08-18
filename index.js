import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

ReactDOM.render(
    <div>
        <Book title="Avatar"/>
        <Book title="Star Wars"/>
        <Book title="Peaceful Warrior"/>
    </div>,
    document.getElementById('root')
);