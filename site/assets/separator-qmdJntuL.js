var e=`import { Separator } from '@alpha-ai/react-component-ui'

export default function SeparatorExample() {
  return <div className="max-w-md space-y-4">
    <div><h3 className="text-sm font-medium">Hướng dẫn sử dụng</h3><p className="text-sm text-muted-foreground">Các thành phần trong cùng một hệ thống.</p></div>
    <Separator />
    <div className="flex h-6 items-center gap-4 text-sm">
      <span>Thiết kế</span><Separator orientation="vertical" /><span>Phát triển</span><Separator orientation="vertical" /><span>Nội dung</span>
    </div>
  </div>
}
`;export{e as default};