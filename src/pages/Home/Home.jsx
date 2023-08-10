import Delivery from '../../components/Delivery/Delivery';
import Form from '../../components/Form/Form';
import ModalComponent from '../../components/Modal/ModalComponent';
import {
  BlockVerification,
  Container,
  History,
  IconHistory,
  TextHisory,
} from './Home.styled';
import { useState } from 'react';

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <BlockVerification>
        <Form />
        <Delivery />
        <History onClick={handleOpen}>
          <IconHistory />
          <TextHisory>Історія</TextHisory>
        </History>
      </BlockVerification>
      <ModalComponent open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Home;
