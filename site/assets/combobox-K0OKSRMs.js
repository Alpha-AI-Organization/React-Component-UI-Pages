var e=`import { useState } from 'react'\r
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from '@alpha-ai/react-component-ui'\r
\r
const frameworks = ['React', 'Vue', 'Svelte', 'Angular', 'Solid']\r
\r
export default function ComboboxExample() {\r
  const [framework, setFramework] = useState<string | null>('React')\r
  return <div className="w-full max-w-sm space-y-3">\r
    <Combobox items={frameworks} value={framework} onValueChange={setFramework}>\r
      <ComboboxInput aria-label="Bộ khung phát triển" placeholder="Tìm bộ khung phát triển" showClear />\r
      <ComboboxContent>\r
        <ComboboxEmpty>Không tìm thấy kết quả.</ComboboxEmpty>\r
        <ComboboxList>{(item: string) => <ComboboxItem key={item} value={item}>{item}</ComboboxItem>}</ComboboxList>\r
      </ComboboxContent>\r
    </Combobox>\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {framework ?? 'Chưa chọn'}</p>\r
  </div>\r
}\r
`;export{e as default};