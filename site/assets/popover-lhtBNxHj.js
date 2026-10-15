var e=`import { useId, useState } from 'react'
import { Button, Input, Label, Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from '@alpha-ai/react-component-ui'

export default function PopoverExample() {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [label, setLabel] = useState('Tài liệu nội bộ')
  const [saved, setSaved] = useState('Tài liệu nội bộ')
  return <div className="space-y-3">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger render={<Button variant="outline" />}>Đổi nhãn</PopoverTrigger>
      <PopoverContent align="start">
        <form className="space-y-4" onSubmit={event => { event.preventDefault(); setSaved(label.trim()); setOpen(false) }}>
          <PopoverHeader><PopoverTitle>Nhãn tài liệu</PopoverTitle><PopoverDescription>Nhập nhãn ngắn để dễ nhận biết.</PopoverDescription></PopoverHeader>
          <div className="space-y-2"><Label htmlFor={id}>Nhãn</Label><Input id={id} value={label} onChange={event => setLabel(event.target.value)} /></div>
          <Button type="submit" size="sm" disabled={!label.trim()}>Áp dụng</Button>
        </form>
      </PopoverContent>
    </Popover>
    <p role="status" className="text-sm text-muted-foreground">Nhãn hiện tại: {saved}</p>
  </div>
}
`;export{e as default};