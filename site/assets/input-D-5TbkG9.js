var e=`import { useId, useState } from 'react'\r
import { Input, Label } from '@alpha-ai/react-component-ui'\r
\r
export default function InputExample() {\r
  const id = useId()\r
  const [name, setName] = useState('')\r
  return <div className="w-full max-w-sm space-y-4">\r
    <div className="space-y-2"><Label htmlFor={id}>Tên dự án</Label>\r
      <Input id={id} value={name} onChange={event => setName(event.target.value)} placeholder="Dự án chưa đặt tên" /></div>\r
    <div className="space-y-2"><Label htmlFor={id + '-disabled'}>Không gian làm việc</Label>\r
      <Input id={id + '-disabled'} value="Nhóm thiết kế" disabled /></div>\r
    <p role="status" className="text-sm text-muted-foreground">Xem trước: {name || 'Dự án chưa đặt tên'}</p>\r
  </div>\r
}\r
`;export{e as default};