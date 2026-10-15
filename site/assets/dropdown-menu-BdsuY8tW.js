var e=`import { useState } from 'react'
import { Button, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@alpha-ai/react-component-ui'

export default function DropdownMenuExample() {
  const [details, setDetails] = useState(true)
  const [action, setAction] = useState('Chưa chọn thao tác')
  return <div className="space-y-3">
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Tùy chọn tài liệu</DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Thao tác</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setAction('Đã chọn tạo bản sao')}>Tạo bản sao</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setAction('Đã chọn đổi tên')}>Đổi tên</DropdownMenuItem>
          <DropdownMenuItem disabled>Xuất tệp · chưa khả dụng</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={details} onCheckedChange={setDetails}>Hiện chi tiết</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <p role="status" className="text-sm text-muted-foreground">{action}. {details ? 'Chi tiết đang hiện.' : 'Chi tiết đang ẩn.'}</p>
  </div>
}
`;export{e as default};