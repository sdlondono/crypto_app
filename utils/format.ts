export const formatPrice = (value: string | number) => {
  const num = Number(value)
  const decimals = num < 1 ? 2 : 0

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals
  }).format(num)
}

export const formatPercent = (value: string | number) => {
  const num = parseFloat(value as string)
  const sign = num > 0 ? '+' : ''
  return `${sign}${num.toFixed(2)}%`
}
