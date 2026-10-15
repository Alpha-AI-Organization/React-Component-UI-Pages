var e=`import { useState } from 'react'
import { Alert, AlertAction, AlertDescription, AlertTitle, Button } from '@alpha-ai/react-component-ui'

export default function AlertExample() {
  const [destructive, setDestructive] = useState(false)
  const [visible, setVisible] = useState(true)
  return <div className="w-full max-w-lg space-y-4">
    {visible && <Alert variant={destructive ? 'destructive' : 'default'}>
      <AlertTitle>{destructive ? 'Cần kiểm tra lại' : 'Đã lưu thay đổi'}</AlertTitle>
      <AlertDescription>{destructive ? 'Đây là thông báo lỗi mô phỏng. Không có yêu cầu nào được gửi.' : 'Nội dung chỉ thay đổi trong ví dụ này.'}</AlertDescription>
      <AlertAction><Button size="sm" variant="ghost" onClick={() => setVisible(false)}>Đóng</Button></AlertAction>
    </Alert>}
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => { setDestructive(value => !value); setVisible(true) }}>Đổi trạng thái</Button>
      {!visible && <Button onClick={() => setVisible(true)}>Hiện thông báo</Button>}
    </div>
  </div>
}
`;export{e as default};