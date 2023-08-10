import {
  Container,
  Department,
  DepartmentKey,
  DepartmentValue,
  StatusBox,
  StatusKey,
  StatusValue,
} from './Delivery.styled';

const Delivery = () => {
  return (
    <Container>
      <StatusBox>
        <StatusKey>Статус доставки:</StatusKey>
        <StatusValue>Одержано</StatusValue>
      </StatusBox>
      <Department>
        <DepartmentKey>Відправлено:</DepartmentKey>
        <DepartmentValue>
          Відділення №17 (до 30 кг): вул. Розумовська, 29
        </DepartmentValue>
      </Department>
      <Department>
        <DepartmentKey>Отримано:</DepartmentKey>
        <DepartmentValue>
          Відділення №13 (до 30 кг): просп. Гагаріна, 43
        </DepartmentValue>
      </Department>
    </Container>
  );
};

export default Delivery;
