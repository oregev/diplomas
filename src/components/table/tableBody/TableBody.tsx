import { type Table, flexRender } from '@tanstack/react-table'
import * as S from './tableBody.style'

interface TableBodyProps<T> {
  table: Table<T>
}

export const TableBody = <T,>({ table }: TableBodyProps<T>) => {
  return (
    <S.TBody>
      {/* BODY ROWS */}
      {table.getRowModel().rows.map((row) => (
        <S.TRow key={row.id}>
          {/* BODY CELLS */}
          {row.getVisibleCells().map((cell) => (
            <S.TData key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </S.TData>
          ))}
        </S.TRow>
      ))}
    </S.TBody>
  )
}
