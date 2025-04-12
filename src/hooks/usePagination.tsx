import { useNavigate, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { FromPathOption, RegisteredRouter } from '@tanstack/router-core'

interface PaginationProps {
  initialTotal?: number
  fromPath: FromPathOption<RegisteredRouter, string>
}

export function usePagination({ initialTotal = 1, fromPath }: PaginationProps) {
  const search = useSearch({ strict: false })
  const navigate = useNavigate({ from: fromPath })
  const [total, setTotal] = useState(initialTotal)

  let page = 1
  if (typeof search.page === 'number') {
    page = search.page
  } else if (typeof search.page === 'string') {
    const parsed = Number(search.page)
    if (!Number.isNaN(parsed)) {
      page = parsed
    }
  }

  function onPageChange(newPage: number) {
    return navigate({
      search: prev => ({
        ...prev,
        page: newPage,
      }),
    })
  }

  function onTotalChange(value: number) {
    setTotal(value)
  }

  return {
    page,
    total,
    onPageChange,
    onTotalChange,
  }
}
