import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { TbTrash } from 'react-icons/tb';

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

export const IconDelete = styled(TbTrash)`
  position: absolute;
  top: 14px;
  right: 16px;
  width: 22px;
  height: 22px;
  color: ${colors.main};
  cursor: pointer;
`;

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '240px',
  height: '380px',
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  p: 4,
  padding: ' 20px 15px;',
  paddingTop: '35px',
  overflowY: 'scroll',
};
