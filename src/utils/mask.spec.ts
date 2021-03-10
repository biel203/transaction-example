import * as mask from './mask'

describe('Mask', () => {
  it('should mask cpf', () => {
    expect(mask.cpf('11111111111')).toBe('111.111.111-11')
    expect(mask.cpf('aaa')).toBe('')
    expect(mask.cpf('11111111111111111111111')).toBe('111.111.111-11')
  })

  it('should mask creditCardNumber', () => {
    expect(mask.creditCardNumber('1111111111111111')).toBe('1111 1111 1111 1111')
    expect(mask.creditCardNumber('aaa')).toBe('')
    expect(mask.creditCardNumber('11111111111111111111111')).toBe('1111 1111 1111 1111')
  })

  it('should mask creditCardExpirationDate', () => {
    expect(mask.creditCardExpirationDate('0121')).toBe('01/21')
    expect(mask.creditCardExpirationDate('aaa')).toBe('')
    expect(mask.creditCardExpirationDate('01210')).toBe('01/21')
  })

  it('should mask creditCardCvv', () => {
    expect(mask.creditCardCvv('1234')).toBe('123')
    expect(mask.creditCardCvv('aaa')).toBe('')
  })

  it('should mask currency', () => {
    expect(mask.currency('1111')).toBe('11,11')
    expect(mask.currency('aaa')).toBe('')
  })
})
