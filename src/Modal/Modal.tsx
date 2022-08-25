import { ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const Modal = (props:any) => {
    const {isOpen, onClose} =props;
  return (
   <>
   <ModalOverlay />
   <ModalContent>
      <p>テスト</p>
   </ModalContent>
   </>
  )
}


export default Modal