var e=`import { useState } from 'react'\r
import { Button, ButtonGroup, ButtonGroupText } from '@alpha-ai/react-component-ui'\r
\r
export default function ButtonGroupExample() {\r
  const [quantity, setQuantity] = useState(1)\r
  return <div className="space-y-3">\r
    <ButtonGroup aria-label="Số lượng">\r
      <Button variant="outline" disabled={quantity === 0} onClick={() => setQuantity(value => value - 1)} aria-label="Giảm số lượng">−</Button>\r
      <ButtonGroupText aria-live="polite">{quantity}</ButtonGroupText>\r
      <Button variant="outline" onClick={() => setQuantity(value => value + 1)} aria-label="Tăng số lượng">+</Button>\r
    </ButtonGroup>\r
    <p className="text-sm text-muted-foreground">Số lượng đã chọn: {quantity}</p>\r
  </div>\r
}\r
`;export{e as default};