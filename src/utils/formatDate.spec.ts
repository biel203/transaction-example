import { formatDateToPtBR } from './formatDate'

test('should format date to pt-br', () => {
  expect(formatDateToPtBR('2020-11-10T19:43:56.451Z')).toBe('10 de novembro de 2020')
})
