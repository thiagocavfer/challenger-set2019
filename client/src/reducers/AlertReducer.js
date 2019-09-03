import {
	SHOW_ALERT,
	HIDE_ALERT
} from '../actions/types'

const INITIAL_STATE = {
	visible: false,
	text: '',
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return {
				visible: true,
				text: action.payload
			}
		case HIDE_ALERT:
			return {
				visible: false,
				text: ''
			}
		default:
			return state
	}
}
