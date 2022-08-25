import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Modal from "../../../Modal/Modal";

const DetailedMenu = (props: any) => {
  // console.log("props", props);

  const { menus, setMenus } = props;

  const { isOpen, onOpen, onClose} = useDisclosure();

  const onClicAddMenu = ()=> onOpen();

  return (
    <SdetailMenu>
      <SMenuLists>
        {/* TODO：mapで表示させる */}
          {menus.map((menu:any,index: any) => (
            <button
            key={index}
            >
              {menu}
            </button>
          ))}
      </SMenuLists>

      <div className="addMenu">
          <button onClick={onClicAddMenu}>追加　モーダルを表示</button>
      </div>
      
      {/* モーダル表示に関する関数 */}
      <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>テスト</ModalHeader>
          <ModalCloseButton />
        </ModalContent>
      </Modal>

      <SVolumeContainer>
        <div className="lastTimeVolume">
          <p>前回のボリュームです</p>
        </div>

        <div className="NextTimeVolume">
          <p>目標のボリュームです</p>
        </div>
      </SVolumeContainer>

      
    </SdetailMenu>
  );
};

const SdetailMenu = styled.div`
  height: 70%;
`;

const SMenuLists = styled.div`
  display: flex;
  flex-direction: column;
`;

const SVolumeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;
export default DetailedMenu;
