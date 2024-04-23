import { useContext, useState } from "react";
import { Modal } from "components/modal";
import { AppRoutes } from "router";
import { AppContext } from "AppContext";
import { useCourses } from "api/useCourses";
import { AddIcon, FolderIcon, HomeIcon, UploadIcon, ShareIcon, PreviewIcon } from "assets/icons";
import { FolderModal } from "features/folderModal";
import { Link } from "components/link";
import * as S from "./layout.style";

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
      <S.IconsContainer>
        <S.IconContainer title="home">
          <Link to={`/${AppRoutes.HOME}`}>
            <HomeIcon width={25} height={25} fill="#fff" />
          </Link>
        </S.IconContainer>
        <S.IconContainer title="editor">
          <Link
            to={`/${AppRoutes.EDITOR}`}
            onClick={() => setSelectedTemplate({ course: null, id: null })}
          >
            <AddIcon width={25} height={25} stroke="#fff" />
          </Link>
        </S.IconContainer>
        <S.IconContainer title="upload">
          <Link to={`/${AppRoutes.UPLOAD}`}>
            <UploadIcon width={25} height={25} stroke="#fff" />
          </Link>
        </S.IconContainer>
        <S.IconContainer title="preview">
          <Link to={`/${AppRoutes.PREVIEW}`}>
            <PreviewIcon width={25} height={25} stroke="#fff" />
          </Link>
        </S.IconContainer>
        <S.IconContainer title="share">
          <Link to={`/${AppRoutes.SHARE}`}>
            <ShareIcon width={25} height={25} stroke="#fff" />
          </Link>
        </S.IconContainer>
      </S.IconsContainer>
      <S.Actions>
        <S.IconContainer onClick={() => setIsOpen(true)} title="new course">
          <FolderIcon width={20} height={25} stroke="#fff" />
        </S.IconContainer>
      </S.Actions>
      <S.TagsContainer>
        <Link to={selectedTemplate.id ? "#" : `/${AppRoutes.HOME}`}>
          <S.Tag $isOn={!!selectedTemplate.id}>Template</S.Tag>
        </Link>
        <Link to={students.length > 0 ? "#" : `/${AppRoutes.UPLOAD}`}>
          <S.Tag $isOn={students.length > 0}>Students</S.Tag>
        </Link>
        <Link to={verified ? "#" : `/${AppRoutes.UPLOAD}`}>
          <S.Tag $isOn={verified}>Verify</S.Tag>
        </Link>
      </S.TagsContainer>
    </S.ActionBarContainer>
  );
};
