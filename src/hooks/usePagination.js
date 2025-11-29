
import { useState, useMemo } from "react";

export default function usePagination({ data = [], pageSize = 10 }) {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(data.length / pageSize));

  const currentData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  function goToPage(p) {
    const valid = Math.max(1, Math.min(p, pageCount));
    setPage(valid);
  }

  return {
    currentData,
    page,
    pageCount,
    goToPage,
    setPage,
  };
}
