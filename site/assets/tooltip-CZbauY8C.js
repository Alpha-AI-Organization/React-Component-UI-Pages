var e=`import { useState } from 'react'
import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alpha-ai/react-component-ui'

export default function TooltipExample() {
  const [pinned, setPinned] = useState(false)
  return <div className="space-y-3">
    <TooltipProvider delay={200}>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline" aria-pressed={pinned} onClick={() => setPinned(value => !value)} />}>
          {pinned ? 'Bỏ ghim tài liệu' : 'Ghim tài liệu'}
        </TooltipTrigger>
        <TooltipContent>{pinned ? 'Bỏ tài liệu khỏi danh sách ghim.' : 'Giữ tài liệu trong danh sách truy cập nhanh.'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <p role="status" className="text-sm text-muted-foreground">{pinned ? 'Tài liệu đã được ghim trong ví dụ.' : 'Tài liệu chưa được ghim.'}</p>
  </div>
}
`;export{e as default};