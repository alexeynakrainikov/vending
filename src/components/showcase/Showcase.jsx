import React from 'react';
import styles from './styles.module.scss'
import Product from "./Product/Product";
import {useSelector} from "react-redux";

const Showcase = () => {
    const goods = useSelector((state) => state.goods.goods)

    return (
        <div className={styles.background}>
            {goods.map((product) => <Product key={product.title} {...product}/>)}
        </div>
    );
}

export default Showcase;