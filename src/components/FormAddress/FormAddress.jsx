import {
  ButtonSubmit,
  ContainerForm,
  IconInput,
  Input,
  InputBox,
  Label,
  LoaderContainer,
  TextError,
} from './FormAddress.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { getAddressPosts } from '../../redux/postOperation';
import { RotatingLines } from 'react-loader-spinner';

const FormAddress = () => {
  const loading = useSelector(state => state.post.loading);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .min(3, 'Мінімальна кількість символів - 3')
        .max(20, 'Максимальна кількість символів - 20')
        .required('Заповніть поле'),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(getAddressPosts(values.city));
      resetForm();
    },
  });

  return (
    <ContainerForm onSubmit={formik.handleSubmit}>
      <InputBox>
        <Label htmlFor="city">Місто</Label>
        <Input
          id="city"
          type="text"
          placeholder="Київ"
          {...formik.getFieldProps('city')}
          className={formik.touched.city && formik.errors.city ? 'invalid' : ''}
        />
        {formik.touched.city && formik.errors.city ? (
          <TextError>{formik.errors.city}</TextError>
        ) : null}
        <IconInput />
      </InputBox>
      {!loading ? (
        <ButtonSubmit type="submit">Пошук</ButtonSubmit>
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

export default FormAddress;
