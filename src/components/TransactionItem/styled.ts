import styled from 'styled-components'

import { LabelProps, STATUS } from './contracts'
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.background.primary};
`

export const Label = styled.h3<LabelProps>`
  > div {
    font-size: 14px;
  }

  > div:first-child {
    font-size: 18px;
  }

  > div:last-child{
    font-size: 14px;
    margin: 5px 0;
    color: ${({ theme, status }) => status === STATUS.PAID ? theme.color.green : theme.color.red};
  }
`
