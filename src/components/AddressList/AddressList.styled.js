import styled from 'styled-components';
import { device } from '../../utils/mixins';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
`;

export const Item = styled.li`
  padding: 2px 0;
  border-bottom: 1px solid #e3e3e3;
  ${device.desktop} {
    padding: 2px 8px;
  }
`;
