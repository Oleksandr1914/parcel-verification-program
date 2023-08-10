import Delivery from '../../components/Delivery/Delivery';
import Form from '../../components/Form/Form';
import { BlockVerification, Container } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <BlockVerification>
        <Form />
        <Delivery />
      </BlockVerification>
    </Container>
  );
};

export default Home;
