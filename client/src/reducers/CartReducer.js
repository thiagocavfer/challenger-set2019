import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	CLEAR_CART
} from '../actions/types'

const INITIAL_STATE = {
	itens: [],
	total: 0
}

export default (state = INITIAL_STATE, action) => {
	let oldState = { ...state }
	switch (action.type) {
		case ADD_TO_CART:
			oldState.itens.push(action.payload)
			return {
				...state,
				itens: oldState.itens
			}
		case REMOVE_FROM_CART:
			let index = oldState.itens.findIndex((item) => item.id = action.payload)
			oldState.itens.splice(index, 1)
			return {
				...state,
				itens: oldState.itens
			}
		default:
			return state
	}
}

