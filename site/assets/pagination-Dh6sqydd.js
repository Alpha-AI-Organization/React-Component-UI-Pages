var e=`import { useState } from 'react'\r
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@alpha-ai/react-component-ui'\r
\r
export default function PaginationExample() {\r
  const [page, setPage] = useState(1)\r
  return <div className="space-y-4">\r
    <p role="status" className="text-center text-sm">Trang {page}/5</p>\r
    <Pagination aria-label="Phân trang ví dụ">\r
      <PaginationContent>\r
        <PaginationItem><PaginationPrevious href={'#page-' + Math.max(1, page - 1)} aria-disabled={page === 1}\r
          onClick={event => { event.preventDefault(); setPage(value => Math.max(1, value - 1)) }} /></PaginationItem>\r
        {[1, 2, 3, 4, 5].map(value => <PaginationItem key={value}>\r
          <PaginationLink href={'#page-' + value} isActive={page === value}\r
            onClick={event => { event.preventDefault(); setPage(value) }}>{value}</PaginationLink>\r
        </PaginationItem>)}\r
        <PaginationItem><PaginationNext href={'#page-' + Math.min(5, page + 1)} aria-disabled={page === 5}\r
          onClick={event => { event.preventDefault(); setPage(value => Math.min(5, value + 1)) }} /></PaginationItem>\r
      </PaginationContent>\r
    </Pagination>\r
  </div>\r
}\r
`;export{e as default};