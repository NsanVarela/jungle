import { createStore } from 'redux'
import { CART_ACTIONS } from '../constants/cart'
import { NUMBER } from '../constants/number'

const initialState = {
    cart: []
}

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_TO_CART:
            const existingPlant = state.cart.find(plant => plant.name === action.payload.name)
            if (existingPlant) {
                return {
                    ...state,
                    cart: state.cart.map(plant =>
                        plant.name === action.payload.name
                        ? { ...plant, amount: plant.amount + NUMBER.ONE }
                        : plant
                    )
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, amount: NUMBER.ONE }]
                }
            }
        case CART_ACTIONS.REMOVE_FROM_CART:
            const plantToRemove = state.cart.find(plant => plant.name === action.payload.name)
            if (plantToRemove.amount > NUMBER.ONE) {
                return {
                    ...state,
                    cart: state.cart.map(plant =>
                        plant.name === action.payload.name
                        ? { ...plant, amount: plant.amount - NUMBER.ONE }
                        : plant
                    )
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.filter(plant => plant.name !== action.payload.name)
                }
            }
        case CART_ACTIONS.EMPTY_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

const store = createStore(cartReducer)

export default store