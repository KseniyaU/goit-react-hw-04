import React from "react";
import { useState, useRef } from "react";
import { ImageModal } from "../ImageModal/ImageModal";
import css from "../ImageCard/ImageCard.module.css";

export const ImageCard = ({ onCardUrlSmall, onCardAlt, onCardUrlBig }) => {
  const subtitle = React.useRef(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle.current) {
      subtitle.style.color = "#f00";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={css.containerImg}>
      <img
        src={onCardUrlSmall}
        alt={onCardAlt}
        onClick={openModal}
        className={css.img}
      ></img>
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onClose={() => closeModal()}
          onUrl={onCardUrlBig}
          onAfter={afterOpenModal}
        />
      )}
    </div>
  );
};