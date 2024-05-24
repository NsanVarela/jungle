import { CART_ACTIONS } from '../constants/cart'

export const addToCart = (name, price) => ({
    type: CART_ACTIONS.ADD_TO_CART,
    payload: { name, price }
})

export const removeFromCart = (name) => ({
    type: CART_ACTIONS.REMOVE_FROM_CART,
    payload: { name }
})

export const emptyCart = () => ({
    type: CART_ACTIONS.EMPTY_CART
})