import { createColumnHelper } from "@tanstack/react-table";
import { useTranslation } from "react-i18next";
import { IStudent } from "AppContext";
import { getIsValidEmail } from "../upload.utils";
import * as S from "./studentsTable.style";

const columnHelper = createColumnHelper<IStudent>();

export const useColumns = (onApprove: (id: string) => void) => {
  const { t } = useTranslation("upload", { keyPrefix: "table" });

  return [
    columnHelper.accessor("last", {
      header: t("last"),
      cell: (value) => value.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("first", {
      header: t("first"),
      cell: (value) => value.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("studentId", {
      header: t("id"),
      cell: (value) => value.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("grade", {
      header: t("grade"),
      cell: (value) => value.getValue(),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("email", {
      header: t("email"),
      cell: (value) => (
        <S.Email $isValid={getIsValidEmail(value.getValue())}>{value.getValue()}</S.Email>
      ),
      footer: (props) => props.column.id,
    }),
    columnHelper.accessor("gender", {
      header: t("gender"),
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
};
