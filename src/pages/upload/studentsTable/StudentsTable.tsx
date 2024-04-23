import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TableBody, TableHead } from "components/table";
import { getColumns } from "./studentsTable.config";
import { IStudent } from "AppContext";
import * as S from "./studentsTable.style";

interface StudentsTableProps {
  students: IStudent[];
  onApprove: (id: string) => void;
}

export const StudentsTable = ({ students, onApprove }: StudentsTableProps) => {
  const table = useReactTable({
    columns: getColumns(onApprove),
    data: students,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <S.Table>
      <TableHead table={table} />
      <TableBody table={table} />
    </S.Table>
  );
};
