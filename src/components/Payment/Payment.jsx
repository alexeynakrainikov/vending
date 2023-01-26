import React from 'react';
import styles from './styles.module.scss'
import Cash from "./Cash/Cash";
import OddMoney from "./OddMoney/OddMoney";

const Payment = () => {

    return (
        <div className={styles.background}>
            <Cash/>
            <OddMoney/>
        </div>
    );
};

export default Payment;