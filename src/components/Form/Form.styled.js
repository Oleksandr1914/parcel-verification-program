import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';
import { TbSearch } from 'react-icons/tb';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${device.tablet} {
    flex-direction: row;
    align-items: end;
    gap: 100px;
  }

  ${device.desktop} {
    gap: 160px;
  }
`;

export const InputBox = styled.div`
  width: 100%;
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
    color: #797878e0;
  }

  &:focus {
    border: 2px solid gray;
  }

  &.invalid {
    border-color: ${colors.main};
  }
`;

export const IconInput = styled(TbSearch)`
  position: absolute;
  top: 40px;
  left: 10px;
  width: 24px;
  height: 24px;
  color: ${colors.text};
`;

export const TextError = styled.div`
  position: absolute;
  bottom: -16px;
  right: 10px;
  font-size: 11px;
  line-height: 1;
  color: ${colors.main};
  ${device.tablet} {
    font-size: 12px;
  }
`;

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 46px;
  color: rgb(253 253 253);
  background-color: ${colors.main};

  &:hover,
  &:focus {
    background-color: ${colors.hover};
  }

  ${device.tablet} {
    width: 193px;
  }
`;
