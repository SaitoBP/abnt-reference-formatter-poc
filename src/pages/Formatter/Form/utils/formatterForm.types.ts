import { Dispatch, SetStateAction } from 'react'
import { Reference } from '../../../../types/reference.types'

export interface FormatterFormProps {
  setReferences: Dispatch<SetStateAction<Reference[]>>
}

export type FormatterFormFields = Omit<Reference, 'id' | 'type'>
