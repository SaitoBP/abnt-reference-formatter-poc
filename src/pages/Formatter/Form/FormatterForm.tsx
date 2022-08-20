import { Button, NumberInput, Select, Stack, TextInput } from '@mantine/core'
import { FC, useState } from 'react'

import {
  FormatterFormFields,
  FormatterFormProps,
} from './utils/formatterForm.types'

const FormatterForm: FC<FormatterFormProps> = (props) => {
  const { setReferences } = props

  const [form, setForm] = useState<FormatterFormFields>({
    authorName: 'Gabriel',
    authorSurname: ' Barbosa Pereira Saito',
    title: 'Como Fazer um Formatter de Referencias ABNT',
    edition: '1',
    location: 'Foz do Iguaçu',
    publisher: 'Uniamerica',
    year: '2020',
    pagination: '291 p',
  })

  const addReference = () => {
    console.log('addReference')
    setReferences((references) => [
      {
        id: references.length,
        type: 'book',
        authorName: form.authorName,
        authorSurname: form.authorSurname,
        title: form.title,
        edition: form.edition,
        location: form.location,
        publisher: form.publisher,
        year: form.year,
        pagination: form.pagination,
      },
      ...references,
    ])
  }

  return (
    <Stack style={{ height: '100%', width: '25%' }} justify='space-between'>
      <Stack>
        <Select
          label='Tipo'
          placeholder='Selecione uma opção'
          data={[{ value: 'book', label: 'Livro' }]}
          defaultValue='book'
        />

        <TextInput
          label='Nome do Autor'
          value={form.authorName}
          onChange={(e) =>
            setForm((form) => ({ ...form, authorName: e.target.value }))
          }
        />

        <TextInput
          label='Sobrenome do Autor'
          value={form.authorSurname}
          onChange={(e) =>
            setForm((form) => ({ ...form, authorSurname: e.target.value }))
          }
        />

        <TextInput
          label='Título'
          value={form.title}
          onChange={(e) =>
            setForm((form) => ({ ...form, title: e.target.value }))
          }
        />

        <NumberInput
          label='Edição'
          value={parseInt(form.edition)}
          onChange={(value) =>
            setForm((form) => ({ ...form, edition: value?.toString() || '' }))
          }
        />

        <TextInput
          label='Local de Publicação'
          value={form.location}
          onChange={(e) =>
            setForm((form) => ({ ...form, location: e.target.value }))
          }
        />

        <TextInput
          label='Editora'
          value={form.publisher}
          onChange={(e) =>
            setForm((form) => ({ ...form, publisher: e.target.value }))
          }
        />

        <NumberInput
          label='Ano'
          value={parseInt(form.year)}
          onChange={(value) =>
            setForm((form) => ({ ...form, year: value?.toString() || '' }))
          }
        />

        <TextInput
          label='Paginação'
          value={form.pagination}
          onChange={(e) =>
            setForm((form) => ({ ...form, pagination: e.target.value }))
          }
        />
      </Stack>

      <Button onClick={() => addReference()}>Adicionar</Button>
    </Stack>
  )
}

export default FormatterForm
