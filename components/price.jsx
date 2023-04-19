export function Price(props) {
    let amount = props.amount
    let currencyCode = 'USD'
    return(
    <p suppressHydrationWarning={true} {...props}>
      {`${new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol'
      }).format(parseFloat(amount))} ${currencyCode}`}
    </p>
    )
}