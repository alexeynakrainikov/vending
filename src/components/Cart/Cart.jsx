import React from 'react';
import styles from './styles.module.scss';
import CartItem from "./CartItem/CartItem";
import {useSelector} from "react-redux";

const Cart = () => {
    const goods = useSelector((state) => state.goods.goods)
    return (
        <div className={styles.background}>
            {goods.map((product) => product.bought? <CartItem key={product.title} {...product}/> : null)}
        </div>
    );
};

export default Cart;