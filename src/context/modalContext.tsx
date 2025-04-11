import { createContext, useContext, useState, ReactNode } from 'react';
import { Modal } from '@mantine/core';

type ModalContextType = {
  openModal: (content: ReactNode, title?: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeModal: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState('');

  const openModal = (content: ReactNode, title: string = '') => {
    setContent(content);
    setTitle(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Modal opened={isOpen} onClose={closeModal} title={title} centered size="lg">
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
