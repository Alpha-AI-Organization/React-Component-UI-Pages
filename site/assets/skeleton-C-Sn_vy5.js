var e=`import { useState } from 'react'
import { Button, Skeleton } from '@alpha-ai/react-component-ui'

export default function SkeletonExample() {
  const [loading, setLoading] = useState(true)
  return <div className="w-full max-w-sm space-y-5">
    {loading ? <div className="flex items-center gap-4" aria-hidden="true"><Skeleton className="size-12 rounded-full" />
      <div className="flex-1 space-y-2"><Skeleton className="h-4 w-3/4" /><Skeleton className="h-4 w-full" /></div>
    </div> : <div className="flex items-center gap-4"><div className="flex size-12 items-center justify-center rounded-full bg-muted text-sm">AN</div>
      <div><p className="font-medium">Nội dung đã sẵn sàng</p><p className="text-sm text-muted-foreground">Đây là dữ liệu mẫu cục bộ.</p></div>
    </div>}
    <p role="status" className="text-sm text-muted-foreground">{loading ? 'Đang hiển thị khung chờ.' : 'Đã hiển thị nội dung.'}</p>
    <Button variant="outline" onClick={() => setLoading(value => !value)}>{loading ? 'Xem nội dung' : 'Hiện khung chờ'}</Button>
  </div>
}
`;export{e as default};