import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  HistoryItem,
  HistoryList,
  Title,
  style,
} from './ModalComponent.styled';

const ModalComponent = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Title>Історія</Title>
          <HistoryList>
            <HistoryItem>
              <span>dfsfddsfdsfdsf</span>
            </HistoryItem>
            <HistoryItem>
              <span>dfsfddsfdsfdsf</span>
            </HistoryItem>
          </HistoryList>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
