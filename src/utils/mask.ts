export const cpf = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
}

export const creditCardNumber = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})(\d)/, "$1 $2")
    .replace(/(\d{4})\d+?$/, "$1")
}

export const creditCardExpirationDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})\d+?$/, "$1")
}

export const creditCardCvv = (value: string) => {
  return value.replace(/\D/g, "").replace(/(\d{3})\d+?$/, "$1")
}

export const currency = (value: string) => {
  const result = value.replace(/\D/g, '')

  if (result) {
    const number = (Number(result) / 100).toFixed(2)
    return number
      .replace(".", ",")
      .replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,")
      .replace(/(\d)(\d{3}),/g, "$1.$2,")
  }

  return result
}
