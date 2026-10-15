var e=`import { useId, useState } from 'react'\r
import { Label, Switch } from '@alpha-ai/react-component-ui'\r
\r
export default function SwitchExample() {\r
  const id = useId()\r
  const [enabled, setEnabled] = useState(true)\r
  const [digest, setDigest] = useState(false)\r
  return <div className="space-y-4">\r
    <div className="flex items-center gap-3"><Switch id={id} checked={enabled} onCheckedChange={setEnabled} />\r
      <Label htmlFor={id}>Thông báo qua email</Label></div>\r
    <div className="flex items-center gap-3"><Switch id={id + '-digest'} size="sm" checked={digest} onCheckedChange={setDigest} />\r
      <Label htmlFor={id + '-digest'}>Bản tin hằng tuần</Label></div>\r
    <div className="flex items-center gap-3"><Switch id={id + '-disabled'} disabled />\r
      <Label htmlFor={id + '-disabled'}>Do không gian làm việc quản lý</Label></div>\r
    <p role="status" className="text-sm text-muted-foreground">Thông báo {enabled ? 'bật' : 'tắt'} · Bản tin {digest ? 'bật' : 'tắt'}</p>\r
  </div>\r
}\r
`;export{e as default};