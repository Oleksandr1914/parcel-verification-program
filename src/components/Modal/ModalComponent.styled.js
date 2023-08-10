import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${colors.text};
`;

export const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 20px;
`;

export const HistoryItem = styled.li`
  padding: 2px 0;
  padding-top: 6px;
  border-bottom: 1px solid #e3e3e3;
`;

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '240px',
  minHeight: '380px',
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
  padding: ' 20px 15px;',
};
