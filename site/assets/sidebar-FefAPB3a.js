var e=`import { useState } from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from '@alpha-ai/react-component-ui'

const sections = ['Tổng quan', 'Bản nháp', 'Đã lưu'] as const

export default function SidebarExample() {
  const [selected, setSelected] = useState<string>(sections[0])
  return <SidebarProvider className="h-72 min-h-0 w-full overflow-hidden rounded-xl border">
    <Sidebar collapsible="none" className="h-full w-40 shrink-0 border-r sm:w-48">
      <SidebarHeader><p className="px-2 text-sm font-semibold">Sổ tay minh họa</p></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tài liệu</SidebarGroupLabel>
          <SidebarGroupContent><SidebarMenu>
            {sections.map(section => <SidebarMenuItem key={section}>
              <SidebarMenuButton isActive={selected === section} onClick={() => setSelected(section)}>{section}</SidebarMenuButton>
            </SidebarMenuItem>)}
          </SidebarMenu></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter><p className="px-2 text-xs text-muted-foreground">Dữ liệu cục bộ</p></SidebarFooter>
    </Sidebar>
    <section className="min-w-0 flex-1 space-y-2 p-4" aria-label="Nội dung điều hướng minh họa">
      <h3 className="font-medium">{selected}</h3>
      <p role="status" className="text-sm text-muted-foreground">Bạn đang xem mục {selected.toLowerCase()}. Sidebar được đặt trong khung xem trước.</p>
    </section>
  </SidebarProvider>
}
`;export{e as default};