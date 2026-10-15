var e=`import { useId } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@alpha-ai/react-component-ui'

export default function HoverCardExample() {
  const id = useId()
  return <div className="space-y-4">
    <p className="text-sm">Tài liệu do <HoverCard>
      <HoverCardTrigger href={\`#\${id}\`} delay={200} className="font-medium underline underline-offset-4">nhóm thiết kế</HoverCardTrigger>
      <HoverCardContent className="space-y-2">
        <h3 className="font-medium">Nhóm thiết kế</h3>
        <p className="text-sm text-muted-foreground">Chăm sóc ngôn ngữ thiết kế, nội dung và tính nhất quán của các component.</p>
        <p className="text-xs text-muted-foreground">Nội dung minh họa, không phải hồ sơ người dùng.</p>
      </HoverCardContent>
    </HoverCard> biên soạn.</p>
    <p id={id} className="text-sm text-muted-foreground">Di chuột hoặc đưa focus vào liên kết để xem thông tin bổ sung. Liên kết dẫn tới đoạn này.</p>
  </div>
}
`;export{e as default};