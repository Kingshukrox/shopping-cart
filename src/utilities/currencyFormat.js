const CURRENCY_FORMATTER=Intl.NumberFormat('en-IN',{style:"currency",currency:"INR"})

export function currencyFormat(amount){
    return CURRENCY_FORMATTER.format(amount);
}