var e=`import { useId, useState } from 'react'\r
import { Label, Textarea } from '@alpha-ai/react-component-ui'\r
\r
export default function TextareaExample() {\r
  const id = useId()\r
  const [message, setMessage] = useState('')\r
  return <div className="w-full max-w-md space-y-2">\r
    <Label htmlFor={id}>Tóm tắt bản phát hành</Label>\r
    <Textarea id={id} value={message} onChange={event => setMessage(event.target.value)} maxLength={240}\r
      aria-describedby={id + '-count'} placeholder="Bản phát hành này có gì thay đổi?" />\r
    <p id={id + '-count'} className="text-sm text-muted-foreground">{message.length}/240 ký tự</p>\r
  </div>\r
}\r
`;export{e as default};