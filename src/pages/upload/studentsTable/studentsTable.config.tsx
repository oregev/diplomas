import { createColumnHelper } from "@tanstack/react-table";
import { IStudent } from "AppContext";
import { getIsValidEmail } from "../upload.utils";
import * as S from "./studentsTable.style";

const columnHelper = createColumnHelper<IStudent>();

export const getColumns = (onApprove: (id: string) => void) => [
  columnHelper.accessor("last", {
    header: "Last",
    cell: (value) => value.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("first", {
    header: "First",
    cell: (value) => value.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("studentId", {
    header: "Id",
    cell: (value) => value.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("grade", {
    header: "Grade",
    cell: (value) => value.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (value) => (
      <S.Email $isValid={getIsValidEmail(value.getValue())}>{value.getValue()}</S.Email>
    ),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (value) => value.getValue(),
    footer: (props) => props.column.id,
  }),
  columnHelper.accessor("approved", {
    header: "",
    cell: (value) => (
      <input
        type="checkbox"
        checked={value.row.original.approved}
        onChange={() => onApprove(value.row.original.id)}
        style={{ cursor: "pointer" }}
      />
    ),
    footer: (props) => props.column.id,
  }),
];
