var e=`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@alpha-ai/react-component-ui'

export default function AccordionExample() {
  return <Accordion defaultValue={['source']} className="mx-auto max-w-lg">
    <AccordionItem value="source">
      <AccordionTrigger>Thư viện cung cấp những gì?</AccordionTrigger>
      <AccordionContent>Các component React có thể kết hợp, với màu sắc và kiểu chữ theo theme chung.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="keyboard">
      <AccordionTrigger>Có thể dùng bàn phím không?</AccordionTrigger>
      <AccordionContent>Dùng Tab hoặc Shift+Tab để chuyển tiêu đề; Enter hoặc Space để mở và thu gọn mục.</AccordionContent>
    </AccordionItem>
    <AccordionItem value="local">
      <AccordionTrigger>Ví dụ này có gửi dữ liệu không?</AccordionTrigger>
      <AccordionContent>Không. Nội dung và tương tác trong ví dụ đều nằm trong trang này.</AccordionContent>
    </AccordionItem>
  </Accordion>
}
`;export{e as default};