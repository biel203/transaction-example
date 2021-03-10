import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDateToPtBR(date: string) {
  return format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })
}
