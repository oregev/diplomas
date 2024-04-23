import ReactModal from "react-modal";
import { styles } from "./modal.style";
import { ReactNode } from "react";
import { useTheme } from "styled-components";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ isOpen, children, onClose }: ModalProps): JSX.Element => {
  const theme = useTheme();

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      style={{
        ...styles,
        overlay: {
          ...styles.overlay,
          background: theme.modalOverlay,
        },
        content: {
          ...styles.content,
          background: theme.body,
          boxShadow: theme.boxShadow,
        },
      }}
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  );
};
