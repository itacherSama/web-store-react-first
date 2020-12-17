import { useState } from 'react';

const useModal = () => {
  const [optionModal, setOptionModal] = useState({
    isOpen: false,
  });

  const onCloseModal = () => {
    setOptionModal({
      isOpen: false,
    });
  };

  return [optionModal, setOptionModal, onCloseModal];
};

export default useModal;
