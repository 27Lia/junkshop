import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const FooterStyle = styled.footer`
  width: 100%;
  height: 15vh;
  margin-top: 70px;
  background-color: #f3f2f2;
  border-top: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  padding: 20px;
  line-height: 30px;

  .footer-text {
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
          상호명:여주고철 | 대표전화:010-2760-7753, 010-9126-9896
        </div>
        <div>Copyright © 여주고철 All rights reserved.</div>
      </InnerContainer>
    </FooterStyle>
  );
}

export default Footer;
