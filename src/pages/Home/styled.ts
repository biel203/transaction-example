import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.section``

export const Container = styled.div`
  overflow: auto;
  max-height: 50vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 16px;
  background-color: ${({ theme }) => theme.background.primary};
`

export const Label = styled.h3`
  > div:first-child {
    font-size: 14px;
  }

  > div:last-child{
    font-size: 20px;
    margin: 5px 0;
    color: ${({ theme }) => theme.color.green};
  }
`

export const Link = styled(RouteLink)`
  display: block;
  margin: 16px;
`
