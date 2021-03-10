import isCpf from './isCpf'

test('should be a cpf valid', () => {
  expect(isCpf('62881349021')).toBe(true)
})

test('should be a cpf invalid', () => {
  expect(isCpf('00000000000')).toBe(false)
})
