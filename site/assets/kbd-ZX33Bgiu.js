var e=`import { useState } from 'react'
import { Button, Input, Kbd, KbdGroup } from '@alpha-ai/react-component-ui'

export default function KbdExample() {
  const [message, setMessage] = useState('Đặt con trỏ vào ô rồi thử phím tắt.')
  return <div className="w-full max-w-md space-y-4">
    <p className="flex flex-wrap items-center gap-2 text-sm">Thử <KbdGroup><Kbd>Ctrl</Kbd><span>+</span><Kbd>K</Kbd></KbdGroup> hoặc <Kbd>Esc</Kbd>.</p>
    <Input aria-label="Ô thử phím tắt" placeholder="Nhấn Ctrl+K hoặc Command+K trong ô này" onKeyDown={event => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setMessage('Đã nhận phím tắt mở tìm kiếm.') }
      if (event.key === 'Escape') setMessage('Đã nhận phím Escape.')
    }} />
    <p role="status" className="text-sm text-muted-foreground">{message}</p>
    <Button size="sm" variant="outline" onClick={() => setMessage('Đặt con trỏ vào ô rồi thử phím tắt.')}>Đặt lại</Button>
  </div>
}
`;export{e as default};