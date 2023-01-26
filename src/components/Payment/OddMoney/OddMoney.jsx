import React from 'react';
import styles from './styles.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setNoChange, setOddMoneyValue} from "../../../redux/reducers/cashSlice";
import {giveChange, removeFromCart} from "../../../redux/reducers/goodsSlice";

const OddMoney = () => {
    const oddMoney = useSelector((state) => state.cash.oddMoney)
    const noChange = useSelector((state) => state.cash.noChange)
    const balance = useSelector((state) => state.cash.balance)
    const dispatch = useDispatch()

    const pickUpChange = () => {
        dispatch(setOddMoneyValue())
        dispatch(removeFromCart())
        if (noChange) {
            dispatch(giveChange(balance))
            dispatch(setNoChange())
        }
    }

    return (
        <div>
            <div className={styles.odd} onClick={() => pickUpChange()}>Pick up change</div>
            <div>
                {oddMoney.map((item) => item.value ? <div className={styles.odd_item}>{`${item.value} pieces for ${item.denomination}P`}</div> : '')}
            </div>
        </div>
    );
};

export default OddMoney;