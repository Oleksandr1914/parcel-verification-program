import {
  ButtonSubmit,
  ContainerForm,
  IconInput,
  Input,
  InputBox,
  Label,
  TextError,
} from './Form.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      token: '',
    },
    validationSchema: Yup.object({
      token: Yup.string()
        .min(11, 'Мінімальна кількість символів - 11')
        .max(17, 'Максимальна кількість символів - 17')
        .matches(
          /^[0-9A-Z]{11}|[0-9A-Z]{17}/,
          'Перевірте правильність написання номеру'
        )
        .required('Мінімальна кількість символів - 11'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ContainerForm onSubmit={formik.handleSubmit}>
      <InputBox>
        <Label htmlFor="token">Номер ТТН</Label>
        <Input
          id="token"
          type="text"
          placeholder="59000509805747"
          {...formik.getFieldProps('token')}
          className={
            formik.touched.token && formik.errors.token ? 'invalid' : ''
          }
        />
        {formik.touched.token && formik.errors.token ? (
          <TextError>{formik.errors.token}</TextError>
        ) : null}
        <IconInput />
      </InputBox>
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </ContainerForm>
  );
};

export default Form;
