var e=`import { useState } from 'react'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@alpha-ai/react-component-ui'

export default function CommandExample() {
  const [selected, setSelected] = useState('Chưa chọn lệnh')
  return <div className="max-w-md space-y-3">
    <Command label="Lệnh minh họa" className="border">
      <CommandInput aria-label="Tìm lệnh minh họa" placeholder="Tìm lệnh…" />
      <CommandList>
        <CommandEmpty>Không tìm thấy lệnh phù hợp.</CommandEmpty>
        <CommandGroup heading="Tài liệu">
          <CommandItem value="Tạo tài liệu" onSelect={() => setSelected('Tạo tài liệu')}>Tạo tài liệu</CommandItem>
          <CommandItem value="Mở bản nháp" onSelect={() => setSelected('Mở bản nháp')}>Mở bản nháp</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tùy chọn">
          <CommandItem value="Xem phím tắt" onSelect={() => setSelected('Xem phím tắt')}>Xem phím tắt</CommandItem>
          <CommandItem disabled value="Đồng bộ">Đồng bộ · chưa khả dụng</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
    <p role="status" className="text-sm text-muted-foreground">{selected}</p>
  </div>
}
`;export{e as default};