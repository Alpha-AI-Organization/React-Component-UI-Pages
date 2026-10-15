var e=`import { useState } from 'react'
import { Button, Spinner } from '@alpha-ai/react-component-ui'

export default function SpinnerExample() {
  const [busy, setBusy] = useState(true)
  return <div className="space-y-5">
    <div className="flex items-center gap-3">{busy && <Spinner className="size-6" aria-label="Đang xử lý mô phỏng" />}
      <p className="text-sm">{busy ? 'Đang xử lý mô phỏng' : 'Đã sẵn sàng'}</p>
    </div>
    <div className="flex flex-wrap gap-2"><Button disabled={busy}>{busy && <Spinner aria-hidden="true" />}{busy ? 'Đang xử lý' : 'Có thể tiếp tục'}</Button>
      <Button variant="outline" onClick={() => setBusy(value => !value)}>{busy ? 'Kết thúc mô phỏng' : 'Bắt đầu lại'}</Button>
    </div>
  </div>
}
`;export{e as default};