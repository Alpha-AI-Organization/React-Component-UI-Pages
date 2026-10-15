var e=`import { useId, useState } from 'react'\r
import { Checkbox, Label } from '@alpha-ai/react-component-ui'\r
\r
export default function CheckboxExample() {\r
  const id = useId()\r
  const [checked, setChecked] = useState(false)\r
  return <div className="space-y-4">\r
    <div className="flex items-center gap-3">\r
      <Checkbox id={id} checked={checked} onCheckedChange={setChecked} />\r
      <Label htmlFor={id}>Đính kèm ghi chú phát hành</Label>\r
    </div>\r
    <div className="flex items-center gap-3">\r
      <Checkbox id={id + '-disabled'} disabled defaultChecked />\r
      <Label htmlFor={id + '-disabled'}>Tệp đính kèm bắt buộc</Label>\r
    </div>\r
    <p role="status" className="text-sm text-muted-foreground">{checked ? 'Có đính kèm ghi chú phát hành' : 'Không đính kèm ghi chú phát hành'}</p>\r
  </div>\r
}\r
`;export{e as default};