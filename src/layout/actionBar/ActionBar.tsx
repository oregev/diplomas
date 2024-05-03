import { useContext, useState } from "react";
import { AppContext } from "AppContext";
import { useCourses } from "api/useCourses";
import { FolderModal } from "features/folderModal";
import { Modal } from "components/modal";
import { Navigator } from "./Navigator";
import { Actions } from "./Actions";
import { Tags } from "./Tags";
import * as S from "./actionBar.styles";

export const ActionBar = (): JSX.Element => {
  const { students, verified, selectedTemplate, setSelectedTemplate } = useContext(AppContext);
  const { courses, createCourse } = useCourses();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCreate = (name: string): void => {
    createCourse({ name, templates: [] });
    setIsOpen(false);
  };

  return (
    <S.ActionBarContainer>
      <Modal isOpen={isOpen} onClose={() => null}>
        <FolderModal courses={courses} onCreate={handleCreate} onClose={() => setIsOpen(false)} />
      </Modal>
      <Navigator onEditor={() => setSelectedTemplate({ course: null, id: null })} />
      <Actions onFolder={() => setIsOpen(true)} onTest={() => null} />
      <Tags
        hasTemplate={!!selectedTemplate.id}
        hasStudents={students.length > 0}
        isVerified={verified}
      />
    </S.ActionBarContainer>
  );
};
