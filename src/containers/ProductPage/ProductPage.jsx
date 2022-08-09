import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorite, setFavorite] = useState([]);

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
                    <div>
                        <img
                            src={product.image}
                            alt=""
                            style={{ width: "500px" }}
                        />
                        <h1>{product.name}</h1>
                        <h2>${product.price}</h2>
                        {product.size === undefined ? (
                            <></>
                        ) : product.size.length === 5 ? (
                            <>
                                <button>{product.size[0]}</button>
                                <button>{product.size[1]}</button>
                                <button>{product.size[2]}</button>
                                <button>{product.size[3]}</button>
                                <button>{product.size[4]}</button>
                            </>
                        ) : product.size ? (
                            <>
                                {" "}
                                <button>{product.size[0]}</button>
                                <button>{product.size[1]}</button>
                                <button>{product.size[2]}</button>
                            </>
                        ) : (
                            <p></p>
                        )}
                        <button onClick={() => addToFavorite(product.id)}>
                            add to favorite
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
