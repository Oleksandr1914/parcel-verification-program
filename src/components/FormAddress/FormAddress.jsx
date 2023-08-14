import {
  ButtonSubmit,
  ContainerForm,
  IconInput,
  Input,
  InputBox,
  Label,
  TextError,
} from './FormAddress.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { getAddressPosts } from '../../redux/postOperation';

const FormAddress = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      city: '',
    },
    validationSchema: Yup.object({
      city: Yup.string()
        .min(3, 'Мінімальна кількість символів - 3')
        .max(20, 'Максимальна кількість символів - 20!')
        .required('Заповніть поле!'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
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
      <ButtonSubmit type="submit">Пошук</ButtonSubmit>
    </ContainerForm>
  );
};

export default FormAddress;
