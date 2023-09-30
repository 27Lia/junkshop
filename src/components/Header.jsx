import { styled } from 'styled-components';

const StyleHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  border-bottom: 1px solid #ddd;
`;

function Header() {
  return (
    <StyleHeader>
      <div>여주 고철</div>
    </StyleHeader>
  );
}
export default Header;
