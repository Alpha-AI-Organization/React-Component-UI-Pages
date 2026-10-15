var e=`import { useId, useState } from 'react'\r
import { Input, Label } from '@alpha-ai/react-component-ui'\r
\r
export default function LabelExample() {\r
  const id = useId()\r
  const [name, setName] = useState('')\r
  return <div className="w-full max-w-sm space-y-2">\r
    <Label htmlFor={id}>Tên hiển thị <span className="text-muted-foreground">(không bắt buộc)</span></Label>\r
    <Input id={id} value={name} onChange={event => setName(event.target.value)} placeholder="Bấm nhãn để chuyển đến ô nhập" />\r
    <p role="status" className="text-sm text-muted-foreground">{name ? 'Xin chào, ' + name + '.' : 'Tên của bạn sẽ xuất hiện ở đây.'}</p>\r
  </div>\r
}\r
`;export{e as default};