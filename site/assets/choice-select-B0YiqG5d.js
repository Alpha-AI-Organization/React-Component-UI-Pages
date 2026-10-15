var e=`import { useState } from 'react'\r
import { ChoiceSelect } from '@alpha-ai/react-component-ui'\r
\r
export default function ChoiceSelectExample() {\r
  const [environment, setEnvironment] = useState('staging')\r
  const options = [\r
    { value: 'development', label: 'Phát triển' },\r
    { value: 'staging', label: 'Thử nghiệm' },\r
    { value: 'production', label: 'Vận hành chính thức', disabled: true },\r
  ]\r
  return <div className="space-y-3">\r
    <ChoiceSelect label="Môi trường" value={environment} options={options} onChange={setEnvironment} />\r
    <p role="status" className="text-sm text-muted-foreground">Đã chọn: {environment}</p>\r
  </div>\r
}\r
`;export{e as default};