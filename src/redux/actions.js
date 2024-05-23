export const addToCart = (name, price) => ({
    type: 'ADD_TO_CART',
    payload: { name, price }
})

export const removeFromCart = (name) => ({
    type: 'REMOVE_FROM_CART',
    payload: { name }
})

export const emptyCart = () => ({
    type: 'EMPTY_CART'
})