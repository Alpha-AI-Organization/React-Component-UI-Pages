var e=`import { useState } from 'react'\r
import { TimePicker } from '@alpha-ai/react-component-ui'\r
\r
export default function TimePickerExample() {\r
  const [time, setTime] = useState('09:30')\r
  return <div className="space-y-3">\r
    <TimePicker aria-label="Giờ bắt đầu" value={time} onChange={setTime} step={30} min="08:00" max="18:00" clearable />\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {time || 'Chưa chọn'} · Mỗi mốc cách 30 phút, từ 08:00–18:00</p>\r
  </div>\r
}\r
`;export{e as default};