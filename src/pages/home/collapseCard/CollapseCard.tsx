import { useState } from "react";
import { useTheme } from "styled-components";
import { ChevronIcon } from "assets/icons";
import { ICourse } from "api/courses";
import { DeleteModal } from "features/deleteModal";
import { Title } from "./Title";
import { TemplateCard } from "../templateCard";
import * as S from "./collapseCard.style";

interface CollapseCardProps {
  course: ICourse;
  onEdit: (id: string) => void;
  onRename: (name: string) => void;
  onDeleteCourse: () => void;
  onDeleteTemplate: (id: string) => void;
}

export const CollapseCard = ({
  course,
  onEdit,
  onRename,
  onDeleteCourse,
  onDeleteTemplate,
}: CollapseCardProps): JSX.Element => {
  const theme = useTheme();
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false);

  return (
    <S.Container
      onClick={(e) => {
        e.stopPropagation();
        setIsCollapseOpen((prev) => !prev);
      }}
    >
      <S.HeaderContainer key={course.id}>
        <Title
          name={course.name}
          onRename={onRename}
          onDelete={() => setIsDeleteOpen((prev) => !prev)}
        />
        <S.IconContainer $isOpen={isCollapseOpen}>
          <ChevronIcon width={20} height={20} stroke={theme.icon} />
        </S.IconContainer>
      </S.HeaderContainer>
      <S.TemplatesContainer>
        {isCollapseOpen &&
          course.templates.map((template) => (
            <TemplateCard
              key={template.id}
              courseId={course.id}
              template={template}
              onDelete={onDeleteTemplate}
              onEdit={onEdit}
            />
          ))}
      </S.TemplatesContainer>
      <DeleteModal
        isOpen={isDeleteOpen}
        onCancel={() => setIsDeleteOpen((prev) => !prev)}
        onDelete={onDeleteCourse}
      />
    </S.Container>
  );
};
