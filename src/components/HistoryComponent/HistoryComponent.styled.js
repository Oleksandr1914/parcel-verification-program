import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device } from '../../utils/mixins';

export const Container = styled.div`
  display: none;
  ${device.tablet} {
    display: block;
    width: 217px;
    min-height: 240px;
    padding: 20px 12px;
    border-radius: 6px;
    box-shadow: inset 1px 1px 3px 0px rgba(166, 141, 174, 0.28);
  }
  ${device.desktop} {
    width: 360px;
    padding: 20px 12px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.text};
`;

export const ListHistory = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
`;

export const ItemHistory = styled.li`
  padding: 2px 0;
  border-bottom: 1px solid #e3e3e3;
  ${device.desktop} {
    padding: 2px 8px;
  }
`;
