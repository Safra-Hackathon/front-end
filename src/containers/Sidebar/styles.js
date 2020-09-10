import styled from 'styled-components';

import { darkText50, primary } from 'styles/colors';

export const Content = styled.aside`
  background: #fff !important;
  border-right: 1px solid #f2f2f2;
  height: 100%;
  width: 220px;
`;

export const Menu = styled.ul`
  width: 100%;

  & a {
    text-decoration: none;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-arround;
  padding: 8px 20px;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? 700 : 500)};
  color: ${(props) => (props.active ? primary.rgb().toString() : darkText50.rgb().toString())};
  background: ${(props) => (props.active
    ? primary
      .fade(0.8)
      .rgb()
      .toString()
    : 'transparent')};

  &:hover {
    background: ${primary
    .fade(0.8)
    .rgb()
    .toString()};
  }
`;

export const MenuIcon = styled.span`
  margin-right: 15px;
`;
