import React from 'react';

import logo from '../../assets/logo-buildbox.png';
import * as S from './styles';

const Header: React.FC = () => (
  <S.ContainerHeader>
    <a href="/">
      <img src={logo} alt="Logo buildbox" />
    </a>
  </S.ContainerHeader>
);

export default Header;
