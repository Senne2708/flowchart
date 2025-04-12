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
      <Modal 
        display={'flex'} 
        opened={isOpen} 
        onClose={closeModal} 
        title={title} 
        centered
        size="auto"
        styles={{
          inner: {
            padding: '20px'
          },
          content: {
            maxWidth: 'calc(100vw - 40px)', // Prevent horizontal overflow
            maxHeight: 'calc(100vh - 40px)', // Prevent vertical overflow
            width: 'auto',
            margin: '0 auto'
          },
          body: {
            padding: '10px',
            overflow: 'auto'
          }
        }}
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
