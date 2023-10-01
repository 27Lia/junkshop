import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';
import { Link } from 'react-router-dom';

const StyleNav = styled.nav`
  width: 100%;
  background-color: #ffffff;

  .li-container {
    height: 60px;
    display: flex;
    align-items: center;
    gap: 25px;
    font-weight: 600;
    @media (max-width: 1000px) {
      justify-content: space-around;
    }
  }

  li {
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.3s;
    border-radius: 20px;
    &:hover {
      background-color: #e1e1e1;
    }
  }
`;

function Nav() {
  return (
    <StyleNav>
      <InnerContainer>
        <nav>
          <ul className="li-container">
            <li>
              <Link to="/introduction">회사소개</Link>
            </li>
            <li>
              <Link to="/scrap">고철/비철</Link>
            </li>
            <li>
              <Link to="/gallery">갤러리</Link>
            </li>
          </ul>
        </nav>{' '}
      </InnerContainer>
    </StyleNav>
  );
}

export default Nav;
