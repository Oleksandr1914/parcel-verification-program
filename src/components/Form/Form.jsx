import {
  ButtonSubmit,
  ContainerForm,
  IconInput,
  Input,
  InputBox,
  Label,
  LoaderContainer,
  TextError,
} from './Form.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getDataTtn } from '../../redux/postOperation';
import { RotatingLines } from 'react-loader-spinner';

const Form = () => {
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

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
    onSubmit: (values, { resetForm }) => {
      dispatch(getDataTtn(values.token));
      resetForm();
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
      {!loading ? (
        <ButtonSubmit type="submit">Перевірити</ButtonSubmit>
      ) : (
        <LoaderContainer>
          <RotatingLines
            strokeColor="#c90303"
            strokeWidth="5"
            animationDuration="0.75"
            width="45"
            visible={true}
          />
        </LoaderContainer>
      )}
    </ContainerForm>
  );
};

export default Form;
