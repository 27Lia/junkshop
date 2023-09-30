import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const FooterStyle = styled.footer`
  width: 100%;
  height: 15vh;
  margin-top: 70px;
  background-color: #737b8c;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;

  .footer-text {
    border-top: 1px solid #646977;
    padding-top: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 150px;
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <InnerContainer>
        <div className="footer-text">
          상호명:여주고철 | 사업자등록번호:? | 대표전화:010-2760-7753,
          010-9126-9896
        </div>
        <div>Copyright © 여주고철 All rights reserved.</div>
      </InnerContainer>
    </FooterStyle>
  );
}

export default Footer;
