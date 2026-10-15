var e=`import { Tabs, TabsContent, TabsList, TabsTrigger } from '@alpha-ai/react-component-ui'

export default function TabsExample() {
  return <Tabs defaultValue="overview" className="w-full max-w-lg">
    <TabsList aria-label="Thông tin tài liệu">
      <TabsTrigger value="overview">Tổng quan</TabsTrigger>
      <TabsTrigger value="changes">Thay đổi</TabsTrigger>
      <TabsTrigger value="access" disabled>Quyền truy cập</TabsTrigger>
    </TabsList>
    <TabsContent value="overview" className="space-y-2 rounded-lg border p-4">
      <h3 className="text-sm font-medium">Hướng dẫn component</h3><p className="text-sm text-muted-foreground">Chuyển tab bằng chuột hoặc các phím mũi tên. Nội dung mỗi tab được liên kết với trigger tương ứng.</p>
    </TabsContent>
    <TabsContent value="changes" className="rounded-lg border p-4">
      <ul className="space-y-2 text-sm"><li>Bổ sung ví dụ tương tác.</li><li>Thống nhất khoảng cách và màu sắc.</li></ul>
    </TabsContent>
  </Tabs>
}
`;export{e as default};