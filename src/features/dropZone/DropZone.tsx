import type { DragEvent } from "react";
import { UploadIcon } from "assets/icons";
import * as S from "./dropZone.style";

interface DropZoneProps {
  width?: number;
  height?: number;
  onDrop: (e: DragEvent<HTMLDivElement>) => Promise<void>;
}

export const DropZone = ({ width, height, onDrop }: DropZoneProps) => {
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <S.DropZone
      id="drop_zone"
      onDrop={onDrop}
      onDragOver={handleDrag}
      $width={width}
      $height={height}
    >
      <UploadIcon width={width ?? 180} height={height ?? 180} />
      <S.Text style={{ fontSize: height && height < 100 ? 14 : 16 }}>Drop your file here...</S.Text>
    </S.DropZone>
  );
};
