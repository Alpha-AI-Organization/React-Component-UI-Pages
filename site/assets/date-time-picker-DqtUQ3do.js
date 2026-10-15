var e=`import { useState } from 'react'\r
import { DateTimePicker } from '@alpha-ai/react-component-ui'\r
\r
export default function DateTimePickerExample() {\r
  const [appointment, setAppointment] = useState('2026-10-15T09:30')\r
  return <div className="space-y-3">\r
    <DateTimePicker aria-label="Lịch hẹn" value={appointment} onChange={setAppointment} min="2026-10-15T09:00" clearable />\r
    <p role="status" className="text-sm text-muted-foreground">Ngày giờ địa phương: {appointment || 'Chọn cả ngày và giờ'}</p>\r
  </div>\r
}\r
`;export{e as default};