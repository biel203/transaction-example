export function formatToCurrency(amount: number) {
  const padding = "000"
  const str = (padding + amount).substring(
    Math.min(amount.toString().length, padding.length)
  )

  const decimal = "," + str.substr(str.length - 2, 2)
  const ints = str
    .substring(0, str.length - 2)
    .split("")
    .reverse()
    .map((digit, i) => (i > 0 && i % 3 === 0 ? digit + "." : digit))
    .reverse()
    .toString()
    .replace(/,/g, "")

  return `R$ ${ints}${decimal}`
}

export function formatToInt(amount: string) {
  return amount.match(/\d+/g)?.join('')
}
