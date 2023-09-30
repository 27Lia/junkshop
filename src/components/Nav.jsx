import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const StyleNav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #e1e1e1; // 경계선

  .li-container {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 25px;
    font-weight: 600;
  }

  li {
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s;
    border-radius: 20px;
    &:hover {
      background-color: #e1e1e1; // 마우스 오버 시 배경색 변경
    }
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around; // 모바일 뷰에서 아이템 간격 균등하게 조정
  }
`;

function Nav() {
  return (
    <InnerContainer>
      <StyleNav>
        <nav>
          <ul className="li-container">
            <li>회사소개</li>
            <li>고철/비철</li>
            <li>갤러리</li>
          </ul>
        </nav>
      </StyleNav>
    </InnerContainer>
  );
}

export default Nav;
