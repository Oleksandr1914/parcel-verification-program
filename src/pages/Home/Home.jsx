import Form from '../../components/Form/Form';
import { BlockVerification, Container } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <BlockVerification>
        <Form />
      </BlockVerification>
    </Container>
  );
};

export default Home;