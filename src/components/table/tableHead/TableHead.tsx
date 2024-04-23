import { type Table, flexRender } from '@tanstack/react-table'
import * as S from './tableHead.style'

interface TableHeaderProps<T> {
  table: Table<T>
}

export const TableHead = <T,>({ table }: TableHeaderProps<T>) => (
  <S.THead>
    {/* HEAD ROWS */}
    {table.getHeaderGroups().map((headerGroup) => (
      <S.TRow key={headerGroup.id}>
        {/* HEAD CELLS */}
        {headerGroup.headers.map((header) => (
          <S.TData key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </S.TData>
        ))}
      </S.TRow>
    ))}
  </S.THead>
)
