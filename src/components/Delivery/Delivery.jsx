import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Department,
  DepartmentKey,
  DepartmentValue,
  StatusBox,
  StatusKey,
  StatusValue,
} from './Delivery.styled';
import { useEffect } from 'react';
import { deleteTtn } from '../../redux/postSlice';

const Delivery = () => {
  const ttnValue = useSelector(state => state.post.ttnValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deleteTtn());
  }, []);

  return (
    <Container>
      <StatusBox>
        <StatusKey>Статус доставки:</StatusKey>
        <StatusValue>{ttnValue.Status}</StatusValue>
      </StatusBox>
      <Department>
        <DepartmentKey>Відправлено:</DepartmentKey>
        <DepartmentValue>{ttnValue.WarehouseSender}</DepartmentValue>
      </Department>
      <Department>
        <DepartmentKey>Отримано:</DepartmentKey>
        <DepartmentValue>{ttnValue.WarehouseRecipient}</DepartmentValue>
      </Department>
    </Container>
  );
};

export default Delivery;
