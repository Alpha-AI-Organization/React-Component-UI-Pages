var e=`import { useState } from 'react'
import { Badge, Button, Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@alpha-ai/react-component-ui'

export default function EmptyExample() {
  const [created, setCreated] = useState(false)
  return <div className="w-full max-w-lg rounded-xl border">
    {created ? <div className="flex flex-wrap items-center justify-between gap-4 p-6">
      <div className="space-y-2"><Badge variant="secondary">1 mục</Badge><p className="text-sm">Nội dung mẫu đã được tạo.</p></div>
      <Button variant="outline" onClick={() => setCreated(false)}>Xóa mục mẫu</Button>
    </div> : <Empty>
      <EmptyHeader><EmptyMedia variant="icon" aria-hidden="true">+</EmptyMedia><EmptyTitle>Chưa có nội dung</EmptyTitle>
        <EmptyDescription>Thêm một mục mẫu để xem giao diện khi có dữ liệu.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent><Button onClick={() => setCreated(true)}>Tạo mục mẫu</Button></EmptyContent>
    </Empty>}
  </div>
}
`;export{e as default};