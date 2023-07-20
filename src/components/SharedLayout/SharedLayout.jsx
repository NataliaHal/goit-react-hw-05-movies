import { Outlet } from 'react-router-dom';
import * as S from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <S.Container>
      <S.Header>
        <nav>
          <S.Link to="/">Home</S.Link>
          <S.Link to="/movies">Movies</S.Link>
        </nav>
      </S.Header>
      <Outlet />
    </S.Container>
  );
};

export default SharedLayout;
