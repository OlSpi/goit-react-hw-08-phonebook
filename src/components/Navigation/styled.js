import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyledLink = styled(NavLink)`
  color: white;
  margin-right: 10px;
  text-decoration: none;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;

  &.active {
    color: #4572a0;
  }
`;
