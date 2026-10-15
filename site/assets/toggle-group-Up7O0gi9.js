var e=`import { useState } from 'react'\r
import { ToggleGroup, ToggleGroupItem } from '@alpha-ai/react-component-ui'\r
\r
export default function ToggleGroupExample() {\r
  const [formats, setFormats] = useState<string[]>(['bold'])\r
  return <div className="space-y-4">\r
    <ToggleGroup multiple value={formats} onValueChange={setFormats} variant="outline" spacing={0} aria-label="Định dạng văn bản">\r
      <ToggleGroupItem value="bold" aria-label="In đậm"><strong>B</strong></ToggleGroupItem>\r
      <ToggleGroupItem value="italic" aria-label="In nghiêng"><em>I</em></ToggleGroupItem>\r
      <ToggleGroupItem value="underline" aria-label="Gạch chân"><span className="underline">U</span></ToggleGroupItem>\r
    </ToggleGroup>\r
    <p style={{ fontWeight: formats.includes('bold') ? 700 : 400, fontStyle: formats.includes('italic') ? 'italic' : 'normal',\r
      textDecoration: formats.includes('underline') ? 'underline' : 'none' }}>Kết hợp nhiều kiểu định dạng.</p>\r
  </div>\r
}\r
`;export{e as default};