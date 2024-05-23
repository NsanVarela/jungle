import { createStore } from 'redux'

const initialState = {
    cart: []
}

function cartReducer(action, state = initialState) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingPlant = state.cart.find(plant => plant.name === action.payload.name)
            if (existingPlant) {
                return {
                    ...state,
                    cart: state.cart.map(plant =>
                        plant.name === action.payload.name
                        ? { ...plant, amount: plant.amount + 1 }
                        : plant
                    )
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, amount: 1 }]
                }
            }
        case 'REMOVE_FROM_CART':
            const plantToRemove = state.cart.find(plant => plant.name === action.payload.name)
            if (plantToRemove.amount > 1) {
                return {
                    ...state,
                    cart: state.cart.map(plant =>
                        plant.name === action.payload.name
                        ? { ...plant, amount: plant.amount - 1 }
                        : plant
                    )
                }
            } else {
                return {
                    ...state,
                    cart: state.cart.filter(plant => plant.name !== action.payload.name)
                }
            }
        case 'EMPTY_CART':
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