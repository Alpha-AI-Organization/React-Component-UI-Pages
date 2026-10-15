var e=`import { useState } from 'react'\r
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@alpha-ai/react-component-ui'\r
\r
const options = [\r
  { value: 'comfortable', label: 'Thoải mái' },\r
  { value: 'compact', label: 'Gọn' },\r
  { value: 'spacious', label: 'Rộng rãi' },\r
]\r
\r
export default function SelectExample() {\r
  const [density, setDensity] = useState<string | null>('comfortable')\r
  return <div className="space-y-3">\r
    <Select items={options} value={density} onValueChange={setDensity}>\r
      <SelectTrigger aria-label="Mật độ hiển thị"><SelectValue placeholder="Chọn mật độ hiển thị" /></SelectTrigger>\r
      <SelectContent alignItemWithTrigger={false}>\r
        {options.map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}\r
      </SelectContent>\r
    </Select>\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {density ?? 'Chưa chọn'}</p>\r
  </div>\r
}\r
`;export{e as default};