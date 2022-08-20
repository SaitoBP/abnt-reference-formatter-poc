export interface Reference {
  id: number
  type: ReferenceTypes
  authorName: string
  authorSurname: string
  title: string
  edition: string
  location: string
  publisher: string
  year: string
  pagination: string
}

export type ReferenceTypes = 'book'
