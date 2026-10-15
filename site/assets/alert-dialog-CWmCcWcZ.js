var e=`import { useState } from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, Button } from '@alpha-ai/react-component-ui'

export default function AlertDialogExample() {
  const [open, setOpen] = useState(false)
  const [archived, setArchived] = useState(false)
  return <div className="space-y-3">
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger render={<Button variant="outline" />}>Lưu trữ bản nháp</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Lưu trữ bản nháp này?</AlertDialogTitle>
          <AlertDialogDescription>Thao tác minh họa chỉ đổi trạng thái bên dưới. Không có dữ liệu nào bị xóa.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Giữ lại</AlertDialogCancel>
          <AlertDialogAction onClick={() => { setArchived(true); setOpen(false) }}>Lưu trữ</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <p role="status" className="text-sm text-muted-foreground">{archived ? 'Bản nháp minh họa đã được lưu trữ.' : 'Bản nháp minh họa vẫn đang hoạt động.'}</p>
  </div>
}
`;export{e as default};