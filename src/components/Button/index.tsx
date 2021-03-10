import { ReactNode } from 'react'

import * as S from './styled'

export type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  icon?: ReactNode
}

const Button = ({ children, icon, disabled }: ButtonProps) => (
  <S.Wrapper disabled={disabled}>
    {!!icon && icon} 
    {children}
  </S.Wrapper>
)

export default Button
