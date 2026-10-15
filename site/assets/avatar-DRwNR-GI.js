var e=`import { useState } from 'react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, Button } from '@alpha-ai/react-component-ui'

const profiles = [{ name: 'An Nguyễn', initials: 'AN' }, { name: 'Bình Trần', initials: 'BT' }, { name: 'Chi Lê', initials: 'CL' }]

export default function AvatarExample() {
  const [selected, setSelected] = useState(0)
  const profile = profiles[selected]
  return <div className="space-y-5">
    <div className="flex items-center gap-4">
      <Avatar size="lg" aria-label={profile.name}><AvatarFallback>{profile.initials}</AvatarFallback><AvatarBadge aria-hidden="true" /></Avatar>
      <p className="text-sm" aria-live="polite">Đang xem: <strong>{profile.name}</strong></p>
    </div>
    <AvatarGroup aria-label="Nhóm hồ sơ mẫu">
      {profiles.map(person => <Avatar key={person.initials}><AvatarFallback>{person.initials}</AvatarFallback></Avatar>)}
      <AvatarGroupCount>+2</AvatarGroupCount>
    </AvatarGroup>
    <Button variant="outline" onClick={() => setSelected(value => (value + 1) % profiles.length)}>Đổi hồ sơ mẫu</Button>
    <p className="text-sm text-muted-foreground">Chữ viết tắt được tạo từ dữ liệu cục bộ; ví dụ không tải ảnh bên ngoài.</p>
  </div>
}
`;export{e as default};