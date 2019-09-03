import {
	SHOW_ALERT,
	HIDE_ALERT
} from './types'

export const show = (data) => {
	return (dispatch) => {
		dispatch({ type: SHOW_ALERT, payload: data })
	}
}

export const hide = () => {
	return (dispatch) => {
		dispatch({ type: HIDE_ALERT })
	}
}
