var e=`import { useState } from 'react'
import { Button, Checkbox, Label, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@alpha-ai/react-component-ui'

export default function SheetExample() {
  const [compact, setCompact] = useState(false)
  const [details, setDetails] = useState(true)
  return <div className="space-y-3">
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Tùy chỉnh danh sách</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader><SheetTitle>Tùy chỉnh danh sách</SheetTitle><SheetDescription>Các lựa chọn chỉ áp dụng cho nhãn minh họa bên dưới.</SheetDescription></SheetHeader>
        <div className="space-y-4 px-4">
          <Label className="flex items-center gap-2"><Checkbox checked={compact} onCheckedChange={setCompact} />Bố cục gọn</Label>
          <Label className="flex items-center gap-2"><Checkbox checked={details} onCheckedChange={setDetails} />Hiện chi tiết</Label>
        </div>
        <SheetFooter><SheetClose render={<Button />}>Xong</SheetClose></SheetFooter>
      </SheetContent>
    </Sheet>
    <p role="status" className="text-sm text-muted-foreground">{compact ? 'Bố cục gọn' : 'Bố cục thoáng'} · {details ? 'Có chi tiết' : 'Ẩn chi tiết'}</p>
  </div>
}
`;export{e as default};