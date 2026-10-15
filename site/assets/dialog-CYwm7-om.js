var e=`import { useId, useState } from 'react'
import { Button, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label } from '@alpha-ai/react-component-ui'

export default function DialogExample() {
  const id = useId()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('Ghi chú tuần')
  const [saved, setSaved] = useState('Ghi chú tuần')
  return <div className="space-y-3">
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline" />}>Đổi tên bản nháp</DialogTrigger>
      <DialogContent>
        <form className="space-y-4" onSubmit={event => { event.preventDefault(); setSaved(name.trim()); setOpen(false) }}>
          <DialogHeader><DialogTitle>Đổi tên bản nháp</DialogTitle><DialogDescription>Tên mới chỉ được lưu trong ví dụ này.</DialogDescription></DialogHeader>
          <div className="space-y-2"><Label htmlFor={id}>Tên bản nháp</Label><Input id={id} value={name} onChange={event => setName(event.target.value)} required /></div>
          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>Hủy</DialogClose>
            <Button type="submit" disabled={!name.trim()}>Lưu tên</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
    <p role="status" className="text-sm text-muted-foreground">Tên đã lưu: {saved}</p>
  </div>
}
`;export{e as default};