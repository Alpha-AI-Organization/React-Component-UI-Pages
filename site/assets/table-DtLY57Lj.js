var e=`import { useState } from 'react'
import { Badge, Button, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@alpha-ai/react-component-ui'

const rows = [{ id: 'alpha', name: 'Mẫu Alpha', group: 'Cơ bản', count: 12 }, { id: 'beta', name: 'Mẫu Beta', group: 'Nâng cao', count: 8 }, { id: 'gamma', name: 'Mẫu Gamma', group: 'Cơ bản', count: 21 }]

export default function TableExample() {
  const [ascending, setAscending] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const sorted = [...rows].sort((left, right) => ascending ? left.count - right.count : right.count - left.count)
  return <div className="w-full space-y-3">
    <Table><TableCaption>Dữ liệu mô phỏng. Bấm tiêu đề Lượt xem để đổi thứ tự.</TableCaption>
      <TableHeader><TableRow><TableHead scope="col">Tên</TableHead><TableHead scope="col">Nhóm</TableHead>
        <TableHead scope="col" aria-sort={ascending ? 'ascending' : 'descending'}><Button variant="ghost" size="sm" onClick={() => setAscending(value => !value)}>Lượt xem {ascending ? '↑' : '↓'}</Button></TableHead>
        <TableHead scope="col">Lựa chọn</TableHead>
      </TableRow></TableHeader>
      <TableBody>{sorted.map(row => <TableRow key={row.id} data-state={selected === row.id ? 'selected' : undefined}>
        <TableCell className="font-medium">{row.name}</TableCell><TableCell><Badge variant="secondary">{row.group}</Badge></TableCell><TableCell>{row.count}</TableCell>
        <TableCell><Button size="sm" variant="outline" aria-pressed={selected === row.id} onClick={() => setSelected(value => value === row.id ? null : row.id)}>{selected === row.id ? 'Bỏ chọn' : 'Chọn'}</Button></TableCell>
      </TableRow>)}</TableBody>
      <TableFooter><TableRow><TableCell colSpan={2}>Tổng lượt xem</TableCell><TableCell colSpan={2}>{rows.reduce((total, row) => total + row.count, 0)}</TableCell></TableRow></TableFooter>
    </Table>
    <p role="status" className="text-sm text-muted-foreground">{selected ? \`Đã chọn \${rows.find(row => row.id === selected)?.name}.\` : 'Chưa chọn hàng nào.'}</p>
  </div>
}
`;export{e as default};