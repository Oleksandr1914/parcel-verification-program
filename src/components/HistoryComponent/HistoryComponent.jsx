import {
  Container,
  ItemHistory,
  ListHistory,
  Title,
} from './HistoryComponent.styled';

const HistoryComponent = () => {
  return (
    <Container>
      <Title>Історія</Title>
      <ListHistory>
        <ItemHistory>
          <span>dfsfddsfdsfdsf</span>
        </ItemHistory>
        <ItemHistory>
          <span>dfsfddsfdsfdsf</span>
        </ItemHistory>
      </ListHistory>
    </Container>
  );
};

export default HistoryComponent;
