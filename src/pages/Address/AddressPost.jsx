import FormAddress from '../../components/FormAddress/FormAddress';
import { BlockAddress, Container } from './AddressPost.styled';

const AddressPost = () => {
  return (
    <Container>
      <BlockAddress>
        <FormAddress />
      </BlockAddress>
    </Container>
  );
};

export default AddressPost;
