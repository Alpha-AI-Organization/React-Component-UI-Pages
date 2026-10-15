var e=`import { useState } from 'react'\r
import { DatePicker } from '@alpha-ai/react-component-ui'\r
\r
export default function DatePickerExample() {\r
  const [date, setDate] = useState('2026-10-15')\r
  return <div className="space-y-3">\r
    <DatePicker aria-label="Ngày bàn giao" value={date} onChange={setDate} min="2026-10-01" max="2026-12-31"\r
      placeholder="Chọn ngày bàn giao" clearable />\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {date || 'Chưa chọn'} · Tháng 10–12/2026</p>\r
  </div>\r
}\r
`;export{e as default};