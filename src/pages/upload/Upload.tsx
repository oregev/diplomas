import { ChangeEvent, DragEvent, useContext, useEffect, useState } from "react";
import { AppRoutes } from "router";
import { AppContext, IStudent } from "AppContext";
import { AddIcon } from "assets/icons";
import { DropZone } from "features/dropZone";
import { Link } from "components/link";
import { Modal } from "components/modal";
import { StudentsTable } from "./studentsTable";
import { AddUserForm } from "./addUserForm";
import { initialState } from "./upload.config";
import { ConfirmModal } from "./confirmModal";
import { FormFooter } from "./formFooter";
import { getIsValidEmail, getStudents } from "./upload.utils";
import * as S from "./upload.style";

export const Upload = (): JSX.Element => {
  const { students, setStudents, setVerified } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [student, setStudent] = useState<Omit<IStudent, "id">>(initialState);

  const isGenerateDisabled = !students.every((student) => student.approved === true);
  const isFormDisabled =
    !student.first ||
    !student.last ||
    !student.studentId ||
    !student.email ||
    !getIsValidEmail(student.email) ||
    !student.gender;

  const handleDrop = async (event: DragEvent<HTMLDivElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files.length > 0) {
      const students = await getStudents(event.dataTransfer?.files?.[0]);
      setStudents(students);
    }
  };

  const handleApprove = (id: string): void => {
    const updated = students.map((student) =>
      student.id === id
        ? {
            ...student,
            approved: !student.approved,
          }
        : student
    );

    setStudents(updated);
  };

  const handleAddUser = (): void => {
    const randomId = crypto.randomUUID();
    setStudents([...students, { ...student, id: randomId }]);
    setIsOpen(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    setStudent((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleOpenUserModal = (): void => {
    if (students.length > 0) {
      setIsConfirmOpen(true);
      return;
    }
    setIsOpen(true);
  };

  const handleConfirm = (): void => {
    setStudents([]);
    setVerified(false);
    setIsOpen(true);
    setIsConfirmOpen(false);
  };

  useEffect(() => {
    if (students.length > 0) {
      setVerified(students.every((student) => student.approved === true));
    }
  }, [students, setVerified]);

  return (
    <S.Container>
      <S.LeftSection>
        <DropZone onDrop={handleDrop} />
        <S.AddContainer onClick={handleOpenUserModal}>
          <AddIcon width={50} height={50} stroke="#fff" />
        </S.AddContainer>
      </S.LeftSection>
      <S.RightSection>
        <StudentsTable students={students} onApprove={handleApprove} />
        {students.length > 0 && (
          <S.LinkContainer>
            <Link
              text="generate"
              to={isGenerateDisabled ? "" : `/${AppRoutes.PREVIEW}`}
              state={{ index: 3 }}
              variant={isGenerateDisabled ? "disabled" : "secondary"}
            />
          </S.LinkContainer>
        )}
      </S.RightSection>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <AddUserForm onChange={handleChange} student={student} />
        <FormFooter
          disabled={isFormDisabled}
          onClose={() => setIsOpen(false)}
          onClear={() => setStudent(initialState)}
          onGenerate={handleAddUser}
        />
      </Modal>
      <ConfirmModal
        isOpen={isConfirmOpen}
        title="Are you sure?"
        content="Clicking confirm will clean the upload table!"
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={handleConfirm}
      />
    </S.Container>
  );
};
