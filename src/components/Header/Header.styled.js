import styled from 'styled-components';
import { colors } from '../../utils/colors';
import { device, size } from '../../utils/mixins';
import { ReactComponent as Mail } from '../../assets/mail.svg';
import { NavLink } from 'react-router-dom';

export const HeaderBox = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.main};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const Container = styled.div`
  margin: 0 auto;
  width: ${size.mobile};
  padding: 24px;
  display: flex;
  align-items: center;

  ${device.tablet} {
    width: ${size.tablet};
    padding: 26px 40px;
  }

  ${device.desktop} {
    width: ${size.desktop};
    padding: 18px 20px;
  }
`;

export const BlockLogo = styled(NavLink)`
  display: flex;
  gap: 6px;
  cursor: pointer;
`;

export const Logotype = styled(Mail)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`;

export const TextLogo = styled.span`
  display: none;

  ${device.tablet} {
    display: inline-flex;
    font-size: 26px;
    font-weight: 800;
    line-height: 1.7;
    color: ${colors.main};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;
  ${device.tablet} {
    gap: 35px;
  }
`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  font-size: 20px;
  font-weight: 600;
  color: #770000;

  & span {
    display: none;
    font-size: 20px;
    font-weight: 600;
    color: #770000;
  }

  &.active {
    color: ${colors.main};
    & span {
      font-weight: 600;
      color: ${colors.main};
    }
  }
  &.active::before {
    content: '';
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 102%;
    height: 2px;
    background-color: ${colors.main};
  }

  &:hover,
  &:focus {
    color: ${colors.hover};
  }

  &:hover span,
  &:focus span {
    color: ${colors.hover};
  }

  &:hover::before,
  &:focus::before {
    background-color: ${colors.hover};
  }

  ${device.tablet} {
    & span {
      display: inline-flex;
    }
  }

  ${device.desktop} {
    font-size: 22px;
    & span {
      font-size: 22px;
    }
  }
`;
