import styled from 'styled-components'

//TODO: Migrate the Typography to theme folder.

export const Wrapper = styled.button`
  width: 100%;
  height: 48px;
  border: 0;
  background-color: ${({ theme }) => theme.button.backgroundColor};
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    margin: 0 8px;
  }
`
