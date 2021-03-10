export type Transaction = {
  amount: number
  buyer_document: string
  credit_card_cvv: string
  credit_card_expiration_date: string
  credit_card_holder_name: string
  credit_card_number: string
  date: string
  id: number
  status: string
}

export type FormTypes = {
  amount?: string
  credit_card_cvv?: string
  credit_card_holder_name?: string
  credit_card_expiration_date?: string
  credit_card_number?: string
  buyer_document?: string
}
