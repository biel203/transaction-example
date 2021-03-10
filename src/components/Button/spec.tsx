import { render, screen } from '@testing-library/react'
import { PlusCircle } from '@styled-icons/boxicons-solid/PlusCircle'

import Button from '.'

test('Shoould render component', () => {
  render(<Button>Button</Button>)
  expect(screen.getByRole('button', { name: /button/i})).toBeInTheDocument()
})

test('Should render component with icon', () => {
  render(<Button icon={<PlusCircle data-testid="icon" />}>Button</Button>)

  expect(screen.getByRole('button', { name: /button/i})).toBeInTheDocument()
  expect(screen.getByTestId('icon')).toBeInTheDocument()
})
