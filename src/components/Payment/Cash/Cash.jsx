import React from 'react';
import styles from './styles.module.scss'
import {useSelector} from "react-redux";
import Banknote from "./Banknote/Banknote";

const Cash = () => {
    const balance = useSelector((state) => state.cash.balance)

    return (
            <div className={styles.cash}>
                <span>Add cash</span>
                <div className={styles.banknotes}>
                    <Banknote value={50}/>
                    <Banknote value={100}/>
                    <Banknote value={500}/>
                    <Banknote value={1000}/>
                </div>
                <div className={styles.balance}>{balance}</div>
            </div>
    );
};

export default Cash;