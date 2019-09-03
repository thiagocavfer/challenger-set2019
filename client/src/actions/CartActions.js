import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART
} from './types'

export const addToCart = (data) => {
	return (dispatch) => {
		dispatch({ type: ADD_TO_CART, payload: data })
	}
}

export const removeFromCart = (id) => {
	return (dispatch) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id })
	}
}

export const clearCart = () => {
	return (dispatch) => {
		dispatch({ type: CLEAR_CART })
	}
}

