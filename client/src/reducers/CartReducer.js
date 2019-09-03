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
			let newItem = action.payload
			oldState.itens.push(newItem)
			return {
				...state,
				itens: oldState.itens,
				total: oldState.total + newItem.valor_unitario,
			}
		case REMOVE_FROM_CART:
			let index = oldState.itens.findIndex((item) => item.id = action.payload)
			let removedItem = oldState.itens.splice(index, 1)
			return {
				...state,
				itens: oldState.itens,
				total: oldState.total - removedItem[0].valor_unitario
			}
		case CLEAR_CART:
			return {
				...INITIAL_STATE
			}
		default:
			return state
	}
}

