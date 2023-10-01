import { styled } from 'styled-components';
import InnerContainer from '../components/InnerContainer.jsx';

const IntroContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;
  margin: 50px 0px 100px 0px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #1b1b1b;
`;

const Highlight = styled.span`
  color: #434bdc;
`;

function IntroductionPage() {
  return (
    <InnerContainer>
      <IntroContainer>
        <Title>인사말</Title>
        <Text>
          안녕하십니까? 자연과 환경을 아끼는 <Highlight>여주고철</Highlight>
          홈페이지에 오신 것을 진심으로 환영합니다.
        </Text>
        <br />
        <Text>
          저희 <Highlight>여주고철</Highlight>은 재활용 전문 업체로, 고철, 비철,
          구리, 동, 전선, 종이, 컴퓨터 등 다양한 재활용 가능한 물품을 수거하고
          있습니다. 또한, 오랜 경험과 전문 기술을 바탕으로, 음식점, 회사, 병원,
          PC방, 공장 등에서 발생하는 철구조물 철거를 철저하고 안전하게 수행하고
          있습니다.
        </Text>
        <br />
        <Text>
          건설 폐기물과 건축 폐기물 수집 및 운반에 필요한 모든 허가를 보유하고
          있어, 고객이 보유한 모든 종류의 폐기물을 신속하고 깨끗하게 처리합니다.
          물론 고철, 비철 외에도 다른 재활용 가능한 모든 물품도 고가로
          매입합니다.
        </Text>
        <br />
        <Text>
          믿음과 성실함을 바탕으로, 저희 <Highlight>여주고철</Highlight>의
          전직원은 인간과 지구의 환경을 모두 행복하게 만드는 일에
          앞장서겠습니다.
        </Text>
      </IntroContainer>
    </InnerContainer>
  );
}

export default IntroductionPage;
