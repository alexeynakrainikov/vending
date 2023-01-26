import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    goods: [
        {
            image: './img/banana.png',
            title: 'Banana',
            price: 10,
            available: 10,
            bought: 0
        },
        {
            image: './img/caramelo.png',
            title: 'Caramelo',
            price: 5,
            available: 500,
            bought: 0
        },
        {
            image: './img/donut.png',
            title: 'Donut',
            price: 40,
            available: 10,
            bought: 0
        },
        {
            image: './img/freepotato.png',
            title: 'Freepotato',
            price: 50,
            available: 10,
            bought: 0
        },
        {
            image: './img/guava.png',
            title: 'Guava',
            price: 40,
            available: 10,
            bought: 0
        },
        {
            image: './img/sandwich.png',
            title: 'Sandwich',
            price: 100,
            available: 10,
            bought: 0
        },
        {
            image: './img/soda.png',
            title: 'Soda',
            price: 80,
            available: 10,
            bought: 0
        },
        {
            image: './img/toffy.png',
            title: 'Toffy',
            price: 1,
            available: 1000,
            bought: 0
        }
    ],
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        giveChange: (state, action) => {
            state.goods[7].bought = action.payload / state.goods[7].price
            state.goods[7].available -= action.payload / state.goods[7].price
        },
        setGoodsValue: (state, action) => {
            state.goods.map((product) => action.payload.title === product.title ? product.available-- && product.bought++ : null)
        },
        removeFromCart: (state) => {
            state.goods.map((product) => product.bought = 0)
        }
    },
})

export const { setGoodsValue, removeFromCart, giveChange} = goodsSlice.actions

export default goodsSlice.reducer