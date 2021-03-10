import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
`

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.grey};
  transition: 0.2s ease-out;
  pointer-events: none;
`

export const ErrorLabel = styled.label`
  position: absolute;
  bottom: -10%;
  padding: 0 4px;
  font-size: 14px;
  left: 12px;
  color: red;
  pointer-events: none;
  background-color: white;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 5px;
  outline: none;

  &:focus + ${Label}, &:valid + ${Label} {
    top: -8px;
    left: 12px;
    font-size: 14px;
    transform: translateY(0);
    background-color: ${({ theme }) => theme.color.white};
  }
`
