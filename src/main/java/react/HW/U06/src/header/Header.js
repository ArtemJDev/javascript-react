import React from 'react';
import './Header.css'


class Header extends React.Component {
    render() {
        return (
        <div className="row">
        <div className="header">
            <ul>
                <li>Главная</li>
                <li>Обо мне</li>
                <li>Скилы</li>
                <li>Контакты</li>
            </ul>
        </div>
        </div>
        )
    }
}


export default Header;