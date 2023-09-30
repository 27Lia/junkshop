import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const StyleNav = styled.nav`
  width: 100%;

  .li-container {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

function Nav() {
  return (
    <StyleNav>
      <nav>
        <InnerContainer>
          <ul className="li-container">
            <li>회사소개</li>
            <li>고철/비철</li>
            <li>갤러리</li>
          </ul>
        </InnerContainer>
      </nav>
    </StyleNav>
  );
}

export default Nav;
