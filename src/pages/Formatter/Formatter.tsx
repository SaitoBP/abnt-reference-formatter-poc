import {
  ActionIcon,
  Button,
  Card,
  Divider,
  Group,
  Menu,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core'
import { FC, useState } from 'react'
import { Dots, Trash } from 'tabler-icons-react'

import { Reference } from '../../types/reference.types'
import { formatAuthor } from '../../utils/formatAuthor'

import { FormatterForm } from './Form'

const Formatter: FC = () => {
  const [references, setReferences] = useState<Reference[]>([])

  return (
    <Stack style={{ height: '100%' }} p='md'>
      <div style={{ height: '5%' }}>
        <Text size='xl'>Formatador de Referencias ABNT</Text>

        <Divider />
      </div>

      <Group style={{ height: '95%', width: '100%' }} noWrap>
        <FormatterForm setReferences={setReferences} />

        <Divider orientation='vertical' />

        <ScrollArea
          offsetScrollbars
          styles={{ root: { height: '100%', width: '75%' } }}
        >
          {references.map((reference, index) => (
            <Card key={index} withBorder p='md' radius='md' shadow='sm' m='xs'>
              <Card.Section withBorder inheritPadding py='xs'>
                <Group position='apart'>
                  <Text weight={500}>{reference.type}</Text>

                  <Menu withinPortal position='bottom-end' shadow='sm'>
                    <Menu.Target>
                      <ActionIcon>
                        <Dots size={16} />
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item icon={<Trash size={14} color='red' />}>
                        Remover
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>
              </Card.Section>

              <Stack pt='sm'>
                <Text>
                  {formatAuthor(reference.authorName, reference.authorSurname)}.{' '}
                  <strong>{reference.title}.</strong> {reference.edition}. ed.{' '}
                  {reference.location}: {reference.publisher}, {reference.year}.{' '}
                  {reference.pagination}.
                </Text>

                <Button variant='light'>Copiar</Button>
              </Stack>
            </Card>
          ))}
        </ScrollArea>
      </Group>
    </Stack>
  )
}

export default Formatter
