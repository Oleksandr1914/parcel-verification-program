import { Item, List } from './AddressList.styled';
import { useSelector } from 'react-redux';

const AddressList = () => {
  const addressPosts = useSelector(state => state.post.addressPosts);

  return (
    <List>
      {addressPosts.map(el => (
        <Item key={el.id}>{el.Description}</Item>
      ))}
    </List>
  );
};

export default AddressList;
