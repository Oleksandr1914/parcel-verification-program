import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 240px;
  padding: 20px 12px;
  border-radius: 6px;
  box-shadow: inset 1px 1px 3px 0px rgba(166, 141, 174, 0.28);
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  border-bottom: 1px solid #e3e3e3;
`;

export const StatusKey = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.text};
`;

export const StatusValue = styled.p`
  color: ${colors.text};
`;

export const Department = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-bottom: 1px solid #e3e3e3;
`;

export const DepartmentKey = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.text};
`;

export const DepartmentValue = styled.p`
  color: ${colors.text};
`;
