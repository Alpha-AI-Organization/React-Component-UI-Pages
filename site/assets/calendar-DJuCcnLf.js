var e=`import { useState } from 'react'\r
import { Calendar, isoDate } from '@alpha-ai/react-component-ui'\r
\r
export default function CalendarExample() {\r
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 9, 15))\r
  return <div className="space-y-3">\r
    <Calendar mode="single" selected={date} onSelect={setDate} defaultMonth={new Date(2026, 9, 1)}\r
      weekStartsOn={1} className="rounded-lg border" />\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {date ? isoDate(date) : 'Chưa chọn'}</p>\r
  </div>\r
}\r
`;export{e as default};