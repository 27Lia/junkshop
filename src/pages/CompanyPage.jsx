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

function CompanyPage() {
  return (
    <InnerContainer>
      <IntroContainer>
        <Title>회사소개</Title>

        <Text>
          <Highlight>비철 전문업체</Highlight>로서, 동, 신주, 알루미늄, 폐전선을
          고가매입 및 저가판매합니다. 공장, 상가, 식당 철거도 집정리 깨끗하게
          해드립니다.
        </Text>
        <br />

        <Text>
          <Highlight>생활폐기물:</Highlight> 침대, 쇼파, 장롱, 냉장고, 유리,
          그릇, 책, 이불 등 가정에서 처리하기 힘든 폐기물을 저렴한 비용으로
          신속하고 깔끔하게 처리해드립니다.
        </Text>
        <br />

        <Text>
          <Highlight>사업장폐기물:</Highlight> 식당/공장/상가/사무실 등 각
          사업장에서 나오는 폐기물 또는 인테리어 폐기물, 사무집기, 식당집기를
          업무에 피해가 없도록 야간처리나 협의로 빠르게 처리하여 드립니다.
        </Text>
        <br />

        <Text>
          <Highlight>업소용/산업용 폐기물:</Highlight> 사무실, 공장, 상가 등에서
          이전, 폐업, 리모델링 등 대규모 정리시 발생되는 대량의 폐기물을
          신속하고 깨끗하게 처리해 드립니다.
        </Text>
        <br />

        <Text>
          <Highlight>철거 서비스:</Highlight> 사무실, 식장, 노래방, PC방, 학원,
          병원, 찜질방, 상가 인테리어 칸막이 등 각종 철거 및 원상복구를 원하시는
          사업장의 시설물을 저렴한 비용으로 철거해 드립니다.
        </Text>
      </IntroContainer>
    </InnerContainer>
  );
}

export default CompanyPage;
