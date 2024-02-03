import css from '../ImageModal/ImageModal.module.css'
//npm install --save react-modal
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
        width: '40%',
    height: '60%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onClose, onUrl, onAfter}) => {
    return (<div>
        <Modal
        isOpen={isOpen}
        onAfterOpen={onAfter}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        
            <img className={ css.modalImg} src={ onUrl} alt="" />
      </Modal>
    </div>)
    
}