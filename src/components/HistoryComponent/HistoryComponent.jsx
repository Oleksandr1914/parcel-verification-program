import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  IconDelete,
  ItemHistory,
  ListHistory,
  Title,
} from './HistoryComponent.styled';
import { changeTtnValue, deleteHistoryPost } from '../../redux/postSlice';

const HistoryComponent = () => {
  const historyPost = useSelector(state => state.post.historyPost);

  const dispatch = useDispatch();

  return (
    <Container>
      <IconDelete onClick={() => dispatch(deleteHistoryPost())} />
      <Title>Історія</Title>
      <ListHistory>
        {historyPost?.map(el => (
          <ItemHistory
            key={el.id}
            onClick={() => dispatch(changeTtnValue(el.Number))}
          >
            <span>{el.Number}</span>
          </ItemHistory>
        ))}
      </ListHistory>
    </Container>
  );
};

export default HistoryComponent;
