import React from "react";
//Importacion de estilos
import * as S from "./styles";
import { GlobalStyles } from "./globalSyles";
//Importacion de modal
import { Modal } from "components/modal/index";

const App = () => {
  ///State and setState are opened model or closed
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <React.Fragment>
      <S.Container>
        <S.Button onClick={openModal}>I'm a modal</S.Button>
        <Modal
          isOpen={showModal}
          onClose={setShowModal}
          img="https://raw.githubusercontent.com/briancodex/react-modal-v1/main/src/components/modal.jpg"
        >
          <div>
            <h1>Are you ready?</h1>
            <p>Get exclusive access to our next launch.</p>
            <button>Join Now</button>
          </div>
        </Modal>
        <GlobalStyles />
      </S.Container>
    </React.Fragment>
  );
};

export default App;
