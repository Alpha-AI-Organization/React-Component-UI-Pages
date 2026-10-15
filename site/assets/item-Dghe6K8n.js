var e=`import { useState } from 'react'
import { Badge, Button, Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from '@alpha-ai/react-component-ui'

const entries = [{ id: 'guide', title: 'Hướng dẫn bắt đầu' }, { id: 'palette', title: 'Bảng màu giao diện' }]

export default function ItemExample() {
  const [read, setRead] = useState<string[]>([])
  const toggle = (id: string) => setRead(value => value.includes(id) ? value.filter(item => item !== id) : [...value, id])
  return <ItemGroup className="w-full max-w-lg">
    {entries.map((entry, index) => <Item key={entry.id} role="listitem" variant={read.includes(entry.id) ? 'muted' : 'outline'}>
      <ItemMedia variant="icon" aria-hidden="true">{index + 1}</ItemMedia>
      <ItemContent><ItemTitle>{entry.title}<Badge variant="secondary">Mẫu</Badge></ItemTitle>
        <ItemDescription>{read.includes(entry.id) ? 'Bạn đã đánh dấu mục này là đã đọc.' : 'Chọn nút bên cạnh để thay đổi trạng thái.'}</ItemDescription>
      </ItemContent>
      <ItemActions><Button size="sm" variant="outline" aria-pressed={read.includes(entry.id)} onClick={() => toggle(entry.id)}>{read.includes(entry.id) ? 'Bỏ đánh dấu' : 'Đã đọc'}</Button></ItemActions>
    </Item>)}
  </ItemGroup>
}
`;export{e as default};