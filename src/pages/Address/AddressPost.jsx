import { useEffect } from 'react';
import AddressList from '../../components/AddressList/AddressList';
import FormAddress from '../../components/FormAddress/FormAddress';
import { BlockAddress, Container } from './AddressPost.styled';
import { deleteAddressPosts } from '../../redux/postSlice';
import { useDispatch } from 'react-redux';

const AddressPost = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteAddressPosts());
  }, []);

  return (
    <Container>
      <BlockAddress>
        <FormAddress />
        <AddressList />
      </BlockAddress>
    </Container>
  );
};

export default AddressPost;
