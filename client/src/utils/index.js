export const formatMoeda = (value) => {
	return 'R$ ' + value.toFixed(2).replace('.', ',');
}
