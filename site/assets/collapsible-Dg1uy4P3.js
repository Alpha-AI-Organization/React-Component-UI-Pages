var e=`import { useState } from 'react'
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@alpha-ai/react-component-ui'

export default function CollapsibleExample() {
  const [open, setOpen] = useState(false)
  return <Collapsible open={open} onOpenChange={setOpen} className="max-w-md space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm font-medium">Tệp đính kèm · 3 tệp</p>
      <CollapsibleTrigger render={<Button variant="outline" size="sm" />}>{open ? 'Thu gọn' : 'Xem danh sách'}</CollapsibleTrigger>
    </div>
    <CollapsibleContent>
      <ul className="space-y-2 rounded-lg border p-3 text-sm">
        <li>Hướng dẫn sử dụng.pdf</li><li>Bảng màu.svg</li><li>Ghi chú phát hành.md</li>
      </ul>
    </CollapsibleContent>
  </Collapsible>
}
`;export{e as default};