import React from 'react';
import styles from './styles.module.scss'
import {increaseCashValue} from "../../../../redux/reducers/cashSlice";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../../../../redux/reducers/goodsSlice";

const Banknote = ({value}) => {
    const dispatch = useDispatch()
    const balance = useSelector((state) => state.cash.balance)
    const increaseCash = () => {
        dispatch(increaseCashValue(value))
        if (!balance) {
            dispatch(removeFromCart())
        }
    }
    return (
        <div className={styles.banknote}>
            <img onClick={() => increaseCash()} src={`./img/${value}-min.png`} alt={`${value}p`}/>
        </div>
    );
};

export default Banknote;