var e=`import { useEffect, useState } from 'react'
import { Button } from '@alpha-ai/react-component-ui'
import { toast } from 'sonner'

const toastId = 'docs-feedback-toast'

export default function SonnerExample() {
  const [message, setMessage] = useState('Chưa có thao tác trong ví dụ.')
  useEffect(() => () => { toast.dismiss(toastId) }, [])
  return <div className="max-w-lg space-y-4">
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => { toast.success('Đã lưu nội dung mẫu', { id: toastId }); setMessage('Đã hiện thông báo thành công.') }}>Thành công</Button>
      <Button variant="outline" onClick={() => { toast.error('Không thể hoàn tất ví dụ', { id: toastId, description: 'Đây là thông báo mô phỏng.' }); setMessage('Đã hiện thông báo lỗi.') }}>Thông báo lỗi</Button>
      <Button variant="outline" onClick={() => {
        toast('Đã thay đổi lựa chọn', { id: toastId, action: { label: 'Hoàn tác', onClick: () => setMessage('Bạn đã hoàn tác lựa chọn mẫu.') } })
        setMessage('Thông báo đang có nút Hoàn tác.')
      }}>Có thao tác</Button>
      <Button variant="ghost" onClick={() => { toast.dismiss(toastId); setMessage('Đã đóng thông báo của ví dụ.') }}>Đóng thông báo</Button>
    </div>
    <p role="status" className="text-sm text-muted-foreground">{message}</p>
    <p className="text-sm text-muted-foreground">Ví dụ dùng Toaster chung của trang tài liệu và chỉ đóng thông báo do chính nó tạo.</p>
  </div>
}
`;export{e as default};