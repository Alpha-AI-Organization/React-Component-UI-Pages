var e=`import { useState } from 'react'
import { Badge, Button } from '@alpha-ai/react-component-ui'

export default function BadgeExample() {
  const [count, setCount] = useState(3)
  return <div className="space-y-5">
    <div className="flex flex-wrap items-center gap-2">
      <Badge>Mặc định</Badge><Badge variant="secondary">Phụ</Badge><Badge variant="outline">Viền</Badge>
      <Badge variant="destructive">Cần chú ý</Badge><Badge variant="ghost">Nhẹ</Badge>
    </div>
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm">Lượt thử</span><Badge variant="secondary" aria-live="polite">{count}</Badge>
      <Button size="sm" variant="outline" onClick={() => setCount(value => value + 1)}>Thêm một</Button>
      <Button size="sm" variant="ghost" onClick={() => setCount(0)}>Đặt lại</Button>
    </div>
  </div>
}
`;export{e as default};