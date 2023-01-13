import React from "react";
import Modal from "./Modal";

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <Modal>
      <h3>Modal 2</h3>
        <p>Hola este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};

export default Modals;
