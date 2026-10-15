var e=`import { useState } from 'react'
import { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@alpha-ai/react-component-ui'

export default function CardExample() {
  const [compact, setCompact] = useState(false)
  const [saved, setSaved] = useState(false)
  return <Card size={compact ? 'sm' : 'default'} className="w-full max-w-sm">
    <CardHeader><CardTitle>Bộ sưu tập mẫu</CardTitle><CardDescription>Một thẻ với nội dung, thao tác và chân thẻ.</CardDescription>
      <CardAction><Button size="sm" variant="ghost" onClick={() => setCompact(value => !value)}>{compact ? 'Mở rộng' : 'Thu gọn'}</Button></CardAction>
    </CardHeader>
    <CardContent><p className="text-sm text-muted-foreground">Đổi kích thước hoặc lưu thẻ để xem trạng thái cục bộ.</p></CardContent>
    <CardFooter className="justify-between gap-3"><Badge variant={saved ? 'default' : 'outline'}>{saved ? 'Đã lưu' : 'Chưa lưu'}</Badge>
      <Button size="sm" onClick={() => setSaved(value => !value)}>{saved ? 'Bỏ lưu' : 'Lưu thẻ'}</Button>
    </CardFooter>
  </Card>
}
`;export{e as default};