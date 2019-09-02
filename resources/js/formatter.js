export const formatCurrency = (value) => {
    if (value) {
        const options = { style: 'currency', currency: 'BRL' }
        const numberFormat = new Intl.NumberFormat('pt-BR', options);
        return numberFormat.format(value)
    }
}
