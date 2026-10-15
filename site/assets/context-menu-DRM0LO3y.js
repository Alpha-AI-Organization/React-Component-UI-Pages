var e=`import { useState } from 'react'
import { ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuTrigger } from '@alpha-ai/react-component-ui'

export default function ContextMenuExample() {
  const [favorite, setFavorite] = useState(false)
  const [action, setAction] = useState('Chưa chọn thao tác')
  return <div className="max-w-md space-y-3">
    <ContextMenu>
      <ContextMenuTrigger role="region" tabIndex={0} aria-label="Mở menu ngữ cảnh của tài liệu" className="flex min-h-32 items-center justify-center rounded-lg border border-dashed p-6 text-center text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Bấm chuột phải hoặc dùng phím menu ngữ cảnh tại đây.
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuLabel>Tài liệu minh họa</ContextMenuLabel>
          <ContextMenuItem onClick={() => setAction('Đã chọn mở tài liệu')}>Mở tài liệu</ContextMenuItem>
          <ContextMenuItem onClick={() => setAction('Đã chọn tạo bản sao')}>Tạo bản sao</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked={favorite} onCheckedChange={setFavorite}>Đánh dấu yêu thích</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
    <p role="status" className="text-sm text-muted-foreground">{action}. {favorite ? 'Đã đánh dấu yêu thích.' : 'Chưa đánh dấu yêu thích.'}</p>
  </div>
}
`;export{e as default};