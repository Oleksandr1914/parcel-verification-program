import styled from 'styled-components';
import { device, size } from '../../utils/mixins';

export const Container = styled.main`
  margin: 0 auto;
  width: ${size.mobile};
  padding: 24px;
  display: flex;
  align-items: center;

  ${device.tablet} {
    width: ${size.tablet};
    padding: 80px 40px;
  }

  ${device.desktop} {
    width: ${size.desktop};
    padding: 120px;
  }
`;

export const BlockVerification = styled.div`
  width: 100%;
  min-height: 480px;
  background-color: rgb(251 251 251);
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;
