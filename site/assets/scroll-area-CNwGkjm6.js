var e=`import { ScrollArea, Separator } from '@alpha-ai/react-component-ui'

export default function ScrollAreaExample() {
  return <ScrollArea className="h-56 w-full max-w-sm rounded-lg border" role="region" aria-label="Danh sách chương có thể cuộn">
    <div className="p-4">
      <h3 className="mb-3 text-sm font-medium">Mục lục tài liệu</h3>
      <ol>
        {Array.from({ length: 20 }, (_, index) => <li key={index}>
          <p className="py-2 text-sm">Chương {index + 1} · {index % 2 === 0 ? 'Nguyên tắc và ví dụ' : 'Hướng dẫn thực hành'}</p>
          {index < 19 && <Separator />}
        </li>)}
      </ol>
    </div>
  </ScrollArea>
}
`;export{e as default};