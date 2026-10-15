var e=`import { useState } from 'react'\r
import { Button } from '@alpha-ai/react-component-ui'\r
\r
export default function ButtonExample() {\r
  const [action, setAction] = useState('Chưa có thao tác')\r
  return <div className="space-y-4">\r
    <div className="flex flex-wrap gap-2">\r
      {(['default', 'secondary', 'outline', 'ghost', 'destructive', 'link'] as const).map(variant =>\r
        <Button key={variant} variant={variant} onClick={() => setAction(variant + ': đã nhấn')}>{variant}</Button>)}\r
    </div>\r
    <div className="flex flex-wrap items-center gap-2">\r
      <Button size="sm" onClick={() => setAction('Đã nhấn nút nhỏ')}>Nhỏ</Button>\r
      <Button size="lg" onClick={() => setAction('Đã nhấn nút lớn')}>Lớn</Button>\r
      <Button disabled>Chưa khả dụng</Button>\r
    </div>\r
    <p role="status" className="text-sm text-muted-foreground">{action}</p>\r
  </div>\r
}\r
`;export{e as default};