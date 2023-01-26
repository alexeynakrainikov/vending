import React from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setGoodsValue} from "../../../redux/reducers/goodsSlice";
import {decreaseCashValue} from "../../../redux/reducers/cashSlice";

const Product = ({image, title, price, available}) => {

    const balance = useSelector((state) => state.cash.balance)
    const dispatch = useDispatch()
    const addToCart = () => {
        if (available && (price <= balance)) {
            dispatch(setGoodsValue({title}))
            dispatch(decreaseCashValue(price))
        }
    }

    return (
        <div onClick={() => addToCart()} className={`${styles.card} ${available ? '' : styles.available}`}>
            <img src={image} alt="product"/>
            <div className={styles.info}>
                <span>{title}</span>
                <span className={styles.price}>{`${price} P`}</span>
            </div>
        </div>
    );
};

export default Product;