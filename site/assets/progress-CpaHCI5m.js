var e=`import { useState } from 'react'
import { Button, Progress, ProgressLabel, ProgressValue } from '@alpha-ai/react-component-ui'

export default function ProgressExample() {
  const [value, setValue] = useState(35)
  return <div className="w-full max-w-md space-y-5">
    <Progress value={value} min={0} max={100}><ProgressLabel>Tiến độ mô phỏng</ProgressLabel><ProgressValue /></Progress>
    <div className="flex flex-wrap gap-2"><Button disabled={value === 100} onClick={() => setValue(current => Math.min(100, current + 20))}>Thêm 20%</Button>
      <Button variant="outline" onClick={() => setValue(0)}>Đặt lại</Button>
    </div>
    <p className="text-sm text-muted-foreground">Các nút chỉ thay đổi giá trị trong ví dụ; không có tác vụ nền.</p>
  </div>
}
`;export{e as default};