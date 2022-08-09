import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={styles.Bar}>
            <NavLink className={styles.Link} to="/">
                Home
            </NavLink>
            <NavLink className={styles.Link} to="/movies/favourites">
                Favourites
            </NavLink>
            <NavLink className={styles.Link} to="/movies/cart">
                Cart
            </NavLink>
        </nav>
    );
};

export default Nav;
