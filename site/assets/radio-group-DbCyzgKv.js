var e=`import { useId, useState } from 'react'\r
import { Label, RadioGroup, RadioGroupItem } from '@alpha-ai/react-component-ui'\r
\r
export default function RadioGroupExample() {\r
  const id = useId()\r
  const [plan, setPlan] = useState('monthly')\r
  return <div className="space-y-4">\r
    <RadioGroup aria-label="Chu kỳ thanh toán" value={plan} onValueChange={value => { if (typeof value === 'string') setPlan(value) }}>\r
      {['monthly', 'yearly'].map(value => <div key={value} className="flex items-center gap-3">\r
        <RadioGroupItem id={id + '-' + value} value={value} /><Label htmlFor={id + '-' + value}>{value === 'monthly' ? 'Hàng tháng' : 'Hàng năm'}</Label>\r
      </div>)}\r
      <div className="flex items-center gap-3"><RadioGroupItem id={id + '-custom'} value="custom" disabled />\r
        <Label htmlFor={id + '-custom'}>Tùy chỉnh (chưa khả dụng)</Label></div>\r
    </RadioGroup>\r
    <p role="status" className="text-sm text-muted-foreground">Chu kỳ thanh toán: {plan}</p>\r
  </div>\r
}\r
`;export{e as default};