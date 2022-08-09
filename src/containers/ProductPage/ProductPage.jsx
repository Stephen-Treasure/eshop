import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState([]);
    // const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        getProductById(id)
            .then(setProduct)
            .finally(() => setLoading(false));
    }, [id]);

    // const handleChange = (event) => {
    //     console.log(event.target.size);
    // };

    const addToFavorite = (id) => {
        if (!favorite.includes(id)) setFavorite(favorite.concat(id));
        console.log(id);
    };

    return (
        <>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <div className={styles.ProductPage}>
                        <img
                            className={styles.ProductImage}
                            src={product.image}
                            alt=""
                        />
                        <div className={styles.ProductInfo}>
                            <h1 className={styles.ProductTitle}>
                                {product.name}
                            </h1>
                            <h2 className={styles.ProductPrice}>
                                ${product.price}
                            </h2>
                            {product.size === undefined ? (
                                <></>
                            ) : product.size.length === 5 ? (
                                <>
                                    {/* <button>{product.size[0]}</button>
                                <button>{product.size[1]}</button>
                                <button>{product.size[2]}</button>
                                <button>{product.size[3]}</button>
                                <button>{product.size[4]}</button> */}
                                    <select name="selection" id="selection">
                                        <option value="XS">
                                            {product.size[0]}
                                        </option>
                                        <option value="S">
                                            {product.size[1]}
                                        </option>
                                        <option value="M">
                                            {product.size[2]}
                                        </option>
                                        <option value="L">
                                            {product.size[3]}
                                        </option>
                                        <option value="XL">
                                            {product.size[4]}
                                        </option>
                                    </select>
                                </>
                            ) : product.size ? (
                                <>
                                    {/* <button>{product.size[0]}</button>
                                <button>{product.size[1]}</button>
                                <button>{product.size[2]}</button> */}
                                    <select name="selection" id="selection">
                                        <option value="S">
                                            {product.size[0]}
                                        </option>
                                        <option value="M">
                                            {product.size[1]}
                                        </option>
                                        <option value="L">
                                            {product.size[2]}
                                        </option>
                                    </select>
                                </>
                            ) : (
                                <p></p>
                            )}
                            <p>Quantity: {product.quantity}</p>
                            <button onClick={() => addToFavorite(product.id)}>
                                Favorite
                            </button>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quo libero facere dolorum
                                neque blanditiis officia tenetur atque quaerat
                                animi, esse illum dolores ipsa culpa facilis
                                repudiandae ad, porro, asperiores excepturi!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
