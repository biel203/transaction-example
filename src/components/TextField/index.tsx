import { ChangeEvent } from 'react'

import * as S from './styled'

export type TextFieldProps = {
  placeholder: string
  error?: string
  name?: string
  value?: string | number
  required?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({ placeholder, error, ...props } : TextFieldProps) => (
  <S.Wrapper>
    {error ? <S.ErrorLabel>{error}</S.ErrorLabel>:null}
    <S.Input {...props} />
    <S.Label>{placeholder}</S.Label>
  </S.Wrapper>
)

export default TextField
