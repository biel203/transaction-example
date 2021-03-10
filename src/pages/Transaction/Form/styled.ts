import styled from 'styled-components'

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
