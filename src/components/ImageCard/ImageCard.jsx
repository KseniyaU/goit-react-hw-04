import React from 'react';
import { useState } from "react";
import { ImageModal } from "../ImageModal/ImageModal";

export const ImageCard = ({ onCardUrlSmall, onCardAlt, onCardUrlBig }) => { 
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
            <div>
                <img src={onCardUrlSmall} alt={onCardAlt} onClick={openModal}></img>
            {modalIsOpen &&
                <ImageModal isOpen={modalIsOpen} onClose={()=>closeModal()} onUrl={onCardUrlBig} onAfter={afterOpenModal} />}
            </div>
        )
}
