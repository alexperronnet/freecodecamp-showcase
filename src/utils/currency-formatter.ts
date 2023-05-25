// Format a number to a currency string using the Intl.NumberFormat API
export const currencyFormatter = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formatter.format(value)
}
