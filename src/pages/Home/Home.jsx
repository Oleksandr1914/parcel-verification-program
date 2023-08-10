import Delivery from '../../components/Delivery/Delivery';
import Form from '../../components/Form/Form';
import HistoryComponent from '../../components/HistoryComponent/HistoryComponent';
import ModalComponent from '../../components/Modal/ModalComponent';
import {
  BlockDeliveryHistory,
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
        <History onClick={handleOpen}>
          <IconHistory />
          <TextHisory>Історія</TextHisory>
        </History>
        <BlockDeliveryHistory>
          <Delivery />
          <HistoryComponent />
        </BlockDeliveryHistory>
      </BlockVerification>
      <ModalComponent open={open} handleClose={handleClose} />
    </Container>
  );
};

export default Home;
