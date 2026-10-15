var e=`import { useId, useState } from 'react'\r
import { Button, Field, FieldDescription, FieldError, FieldGroup, FieldLabel, Input } from '@alpha-ai/react-component-ui'\r
\r
export default function FieldExample() {\r
  const id = useId()\r
  const [email, setEmail] = useState('')\r
  const [submitted, setSubmitted] = useState(false)\r
  const invalid = submitted && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)\r
  return <form noValidate className="w-full max-w-sm space-y-4" onSubmit={event => { event.preventDefault(); setSubmitted(true) }}>\r
    <FieldGroup>\r
      <Field data-invalid={invalid || undefined}>\r
        <FieldLabel htmlFor={id}>Email công việc</FieldLabel>\r
        <Input id={id} type="email" value={email} onChange={event => { setEmail(event.target.value); setSubmitted(false) }}\r
          aria-invalid={invalid} aria-describedby={id + '-help' + (invalid ? ' ' + id + '-error' : '')} placeholder="you@example.com" />\r
        <FieldDescription id={id + '-help'}>Chỉ dùng trong ví dụ này trên máy của bạn.</FieldDescription>\r
        {invalid && <FieldError id={id + '-error'}>Nhập địa chỉ email hợp lệ.</FieldError>}\r
      </Field>\r
    </FieldGroup>\r
    <Button type="submit">Kiểm tra email</Button>\r
    {submitted && !invalid && <p role="status" className="text-sm">Định dạng email hợp lệ. Chưa gửi dữ liệu.</p>}\r
  </form>\r
}\r
`;export{e as default};