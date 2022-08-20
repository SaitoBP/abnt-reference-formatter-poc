/**
 * Autores são indicados por seu sobrenome em letras
 * maisculas seguido das iniciais do nome. E limita-se
 * a duas inciais por cada autor.
 */
export const formatAuthor = (name: string, surname: string): string => {
  const initials = name
    .split(' ')
    .map((word) => word[0])
    .filter((initial, index) => index < 2)
    .join('. ')
    .toUpperCase()

  return `${surname.toUpperCase()}, ${initials}`
}
