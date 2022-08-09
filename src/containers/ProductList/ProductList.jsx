import React from "react";
import { useState, useEffect } from "react";
import { getProdcuts } from "../../services/products";
import styles from "./ProductList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const wrapper = async () => {
            const products = await getProdcuts();
            setProducts(products);
        };
        wrapper();
    }, []);
    return (
        <section className={styles.Container}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductList;
