var e=`import { useId, useState } from 'react'\r
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, Label } from '@alpha-ai/react-component-ui'\r
\r
export default function InputGroupExample() {\r
  const id = useId()\r
  const [slug, setSlug] = useState('launch-notes')\r
  const [confirmed, setConfirmed] = useState('')\r
  return <div className="w-full max-w-md space-y-3">\r
    <Label htmlFor={id}>Địa chỉ trang</Label>\r
    <InputGroup>\r
      <InputGroupAddon><InputGroupText>docs/</InputGroupText></InputGroupAddon>\r
      <InputGroupInput id={id} value={slug} onChange={event => setSlug(event.target.value)} />\r
      <InputGroupAddon align="inline-end">\r
        <InputGroupButton disabled={!slug.trim()} onClick={() => setConfirmed('docs/' + slug.trim())}>Áp dụng</InputGroupButton>\r
      </InputGroupAddon>\r
    </InputGroup>\r
    <p role="status" className="text-sm text-muted-foreground">{confirmed ? 'Đã áp dụng: ' + confirmed : 'Sửa đường dẫn rồi nhấn Áp dụng.'}</p>\r
  </div>\r
}\r
`;export{e as default};