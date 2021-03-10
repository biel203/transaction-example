/*
  Vish, de acordo com os testes essa função parece estar quebrado.
  Você teria alguma ideia melhor para resolver esta função?
*/

export default function (val) {
  val = val.replace(/[^\d]+/g, '')
  if (val === '') {
    return false
  }

  // Valida 1o digito
  var add = 0
  for (var i = 0; i < 9; ++i) {

    add += parseInt(val.charAt(i)) * (10 - i)
  }

  var rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }

  if (rev !== parseInt(val.charAt(9))) {
    return false
  }

  // Valida 2o digito
  add = 0
  for (i = 0; i < 10; ++i) {

    add += parseInt(val.charAt(i)) * (11 - i)
  }

  rev = 11 - (add % 11)
  if (rev === 10 || rev === 11) {
    rev = 0
  }

  if (rev !== parseInt(val.charAt(10))) {
    return false
  }

  return true
}
