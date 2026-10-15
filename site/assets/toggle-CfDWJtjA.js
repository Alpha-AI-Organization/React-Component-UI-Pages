var e=`import { useState } from 'react'\r
import { Toggle } from '@alpha-ai/react-component-ui'\r
\r
export default function ToggleExample() {\r
  const [bold, setBold] = useState(false)\r
  const [italic, setItalic] = useState(false)\r
  return <div className="space-y-4">\r
    <div className="flex gap-2">\r
      <Toggle variant="outline" aria-label="In đậm" pressed={bold} onPressedChange={setBold}><strong>B</strong></Toggle>\r
      <Toggle aria-label="In nghiêng" pressed={italic} onPressedChange={setItalic}><em>I</em></Toggle>\r
      <Toggle disabled aria-label="Gạch chân chưa khả dụng"><span className="underline">U</span></Toggle>\r
    </div>\r
    <p style={{ fontWeight: bold ? 700 : 400, fontStyle: italic ? 'italic' : 'normal' }}>Xem trước định dạng văn bản.</p>\r
  </div>\r
}\r
`;export{e as default};