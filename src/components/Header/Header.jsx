import React from "react";
import Icon from './Icon';
const Header = () => {

    return (
       <header className="header row">
            <Icon className="col-4 text-center header__logo"/> 
            <h1 className="header__title col">Кино в топку</h1>
       </header>
    );
}

export default Header;