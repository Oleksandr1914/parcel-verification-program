import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {
  HistoryItem,
  HistoryList,
  IconDelete,
  Title,
  style,
} from './ModalComponent.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeTtnValue, deleteHistoryPost } from '../../redux/postSlice';

const ModalComponent = ({ open, handleClose }) => {
  const historyPost = useSelector(state => state.post.historyPost);

  const dispatch = useDispatch();

  const handleClick = el => {
    dispatch(changeTtnValue(el.Number));
    handleClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconDelete onClick={() => dispatch(deleteHistoryPost())} />
          <Title>Історія</Title>
          <HistoryList>
            {historyPost?.map(el => (
              <HistoryItem key={el.id} onClick={() => handleClick(el)}>
                <span>{el.Number}</span>
              </HistoryItem>
            ))}
          </HistoryList>
        </Box>
      </Modal>
    </>
  );
};

export default ModalComponent;
