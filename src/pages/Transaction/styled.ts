import styled from 'styled-components'

export const Wrapper = styled.section``

export const Header = styled.header`
  position: relative;
  align-items: center;
  padding: 24px 0;
  background-color: ${({ theme }) => theme.background.primary};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 60px 16px 0;

  > * {
    margin: 8px 0;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 8px;

  > *:first-child {
    width: 100%;
  }
`

export const Back = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  svg {
    fill: #6045AF;
  }
`

export const Title = styled.h1`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #1D1647;
  flex: 1;
`


