import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const StyleHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: #ffffff;
  border-bottom: 2px solid #f7f6f6;
  padding: 0 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

function Header() {
  return (
    <StyleHeader>
      <Link to="/">여주 고철</Link>
    </StyleHeader>
  );
}

export default Header;
