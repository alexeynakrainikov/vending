import React from 'react';
import styles from './styles.module.scss'

const CartItem = ({image, title, bought}) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="product"/>
            <div className={styles.info}>
                <span>{title}</span>
                <span>{bought}</span>
            </div>
        </div>
    );
};

export default CartItem;