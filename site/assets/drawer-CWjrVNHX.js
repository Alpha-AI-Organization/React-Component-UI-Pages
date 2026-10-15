var e=`import { useState } from 'react'
import { Button, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@alpha-ai/react-component-ui'

export default function DrawerExample() {
  const [open, setOpen] = useState(false)
  const [chosen, setChosen] = useState('Chưa chọn')
  return <div className="space-y-3">
    <Drawer open={open} onOpenChange={setOpen} showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>Chọn khoảng thời gian</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader><DrawerTitle>Khoảng thời gian</DrawerTitle><DrawerDescription>Chọn một khoảng để cập nhật nhãn minh họa.</DrawerDescription></DrawerHeader>
          <div className="grid gap-2 px-4">
            {['Hôm nay', 'Tuần này', 'Tháng này'].map(option => <Button key={option} variant="outline" onClick={() => { setChosen(option); setOpen(false) }}>{option}</Button>)}
          </div>
          <DrawerFooter><DrawerClose render={<Button variant="ghost" />}>Hủy</DrawerClose></DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
    <p role="status" className="text-sm text-muted-foreground">Khoảng đã chọn: {chosen}</p>
  </div>
}
`;export{e as default};