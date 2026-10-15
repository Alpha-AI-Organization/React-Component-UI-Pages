var e=`import { useState } from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@alpha-ai/react-component-ui'

export default function BreadcrumbExample() {
  const [location, setLocation] = useState('Component')
  return <div className="space-y-4">
    <Breadcrumb aria-label="Đường dẫn minh họa">
      <BreadcrumbList>
        <BreadcrumbItem><BreadcrumbLink href="#home" onClick={event => { event.preventDefault(); setLocation('Trang chủ') }}>Trang chủ</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbLink href="#documentation" onClick={event => { event.preventDefault(); setLocation('Tài liệu') }}>Tài liệu</BreadcrumbLink></BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem><BreadcrumbPage>Component</BreadcrumbPage></BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <p role="status" className="text-sm text-muted-foreground">Mục vừa chọn: {location}. Liên kết chỉ cập nhật ví dụ này.</p>
  </div>
}
`;export{e as default};