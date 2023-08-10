import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { ReactComponent as Search } from '../../assets/search.svg';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-weight: 400;
  line-height: 1.3;
  color: ${colors.text};
`;

export const Input = styled.input`
  padding: 10px 12px;
  padding-left: 44px;
  line-height: 1.5;
  color: ${colors.text};
  background-color: #d7d7d75e;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: transparent;

  &::placeholder {
    color: #b9b9b9;
  }

  &.invalid {
    border-color: ${colors.main};
  }
`;

export const IconInput = styled(Search)`
  position: absolute;
  top: 42px;
  left: 12px;
  width: 24px;
  height: 24px;
  & path {
    stroke: ${colors.text};
  }
`;

export const TextError = styled.div`
  position: absolute;
  bottom: -16px;
  right: 10px;
  font-size: 11px;
  line-height: 1;
  color: ${colors.main};
`;

export const ButtonSubmit = styled.button`
  color: rgb(253 253 253);
  background-color: ${colors.main};
`;
