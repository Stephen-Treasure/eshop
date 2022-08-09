import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
    const { product } = props;
    return (
        <NavLink to={`/products/${product.id}`}>
            <div>
                <div className={styles.ProductCard}>
                    <img
                        className={styles.ProductImage}
                        src={product.image}
                        alt=""
                    />
                    <p className={styles.ProductName}>{product.name}</p>
                    <p className={styles.ProductPrice}>{product.price}</p>
                </div>
                <br />
            </div>
        </NavLink>
    );
};

export default ProductCard;
