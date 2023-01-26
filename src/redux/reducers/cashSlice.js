import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    balance: 0,
    oddMoney: [
        {
            denomination: 1,
            value: 0,
            reserve: 100
        },
        {
            denomination: 5,
            value: 0,
            reserve: 50
        },
        {
            denomination: 10,
            value: 0,
            reserve: 10
        },
        {
            denomination: 50,
            value: 0,
            reserve: 10
        },
        {
            denomination: 100,
            value: 0,
            reserve: 10
        },
        {
            denomination: 500,
            value: 0,
            reserve: 10
        },
    ],
    noChange: false
}


export const cashSlice = createSlice({

    name: 'cash',
    initialState,
    reducers: {

        setNoChange: (state) => {
            state.noChange = false
            state.balance = 0
        },
        decreaseCashValue: (state, action) => {
            state.balance -= action.payload
        },
        increaseCashValue: (state, action) => {
            state.balance += action.payload
            state.oddMoney.map(item => action.payload === item.denomination ? item.reserve++ : null
            )
            state.oddMoney.map(item => item.value = 0)
        },
        setOddMoneyValue: (state) => {
            if (state.oddMoney.every((item) => item.reserve === 0 || item.denomination > state.balance && state.balance !== 0)) {
                if (!state.noChange) {
                    alert('Нажмите кнопку еще раз, чтобы получить сдачу')
                    state.noChange = true
                }

            } else {
                for (let i = state.oddMoney.length - 1; i >= 0; i--) {
                    if (state.oddMoney[i].reserve && (state.oddMoney[i].denomination <= state.balance)) {
                        let temp = Math.floor(state.balance / state.oddMoney[i].denomination)
                        if (state.oddMoney[i].reserve >= temp) {
                            state.oddMoney[i].value = temp
                            state.oddMoney[i].reserve -= temp
                            state.balance = state.balance % state.oddMoney[i].denomination
                        } else {
                            state.oddMoney[i].value = state.oddMoney[i].reserve
                            state.oddMoney[i].reserve = 0
                            state.balance = state.balance - (state.oddMoney[i].denomination * state.oddMoney[i].value)
                            if (state.balance && !state.oddMoney[0].reserve) {
                                state.noChange = true
                                alert('Нажмите кнопку еще раз, чтобы получить сдачу')
                            }
                        }
                    }
                }
            }

        }
    },
})

export const {decreaseCashValue, increaseCashValue, setOddMoneyValue, setNoChange} = cashSlice.actions

export default cashSlice.reducer