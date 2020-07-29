import React, {useContext} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper teal lighten-2">
                <span className="brand-logo">Приложение</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <NavLink to="/home">Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">О нас</NavLink>
                    </li>
                    <li>
                        <NavLink to="/detail">Подробнее</NavLink>
                    </li>
                    <li>
                        <a
                            href="/"
                            onClick={logoutHandler}
                        >
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}