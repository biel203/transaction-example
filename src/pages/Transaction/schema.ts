import * as yup from 'yup'

const schema = yup.object().shape({
  amount: yup
    .string()
    .test("amount", "Tem que ser diferente de zero", (v) => v !== "0,00")
    .required(),
  credit_card_cvv: yup.string().min(3).max(4).required(),
  credit_card_holder_name: yup.string().required(),
  credit_card_expiration_date: yup.string().required(),
  buyer_document: yup.string().required(),
})

export default schema
