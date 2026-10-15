var e=`import { useId, useState } from 'react'\r
import { Label, Slider } from '@alpha-ai/react-component-ui'\r
\r
export default function SliderExample() {\r
  const id = useId()\r
  const [volume, setVolume] = useState([40])\r
  const [range, setRange] = useState([20, 80])\r
  return <div className="w-full max-w-sm space-y-6">\r
    <div className="space-y-3">\r
      <Label id={id + '-volume'}>Âm lượng: {volume[0]}%</Label>\r
      <Slider aria-labelledby={id + '-volume'} value={volume} min={0} max={100} step={5}\r
        onValueChange={value => setVolume(Array.isArray(value) ? value : [value])} />\r
    </div>\r
    <div className="space-y-3">\r
      <Label id={id + '-range'}>Khoảng ngân sách: {range.join(' – ')}</Label>\r
      <Slider aria-labelledby={id + '-range'} value={range} min={0} max={100} step={10}\r
        onValueChange={value => setRange(Array.isArray(value) ? value : [value])} />\r
    </div>\r
  </div>\r
}\r
`;export{e as default};