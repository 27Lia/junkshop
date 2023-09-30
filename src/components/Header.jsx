import { styled } from 'styled-components';

const StyleHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: #f4f4f4;
  color: #333333;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 20px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

function Header() {
  return (
    <StyleHeader>
      <header>여주 고철</header>
    </StyleHeader>
  );
}

export default Header;
