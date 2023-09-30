import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const SectionStyle = styled.div`
  margin: 80px 0px;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;

  .box-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  article {
    display: flex;
    justify-content: center;
  }
  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 250px;
    padding: 25px;
    background-color: whitesmoke;
    box-sizing: border-box;
  }

  .description {
    margin: 20px 0px;
  }
  .hp {
    position: absolute;
    top: 150px; // hp를 box의 하단에 배치합니다.
  }
  @media (max-width: 1000px) {
    .box {
      width: 200px; // 원하는 크기로 조정하세요.
      height: 200px; // 원하는 크기로 조정하세요.
    }
  }

  @media (max-width: 800px) {
    .box {
      width: 150px; // 원하는 크기로 조정하세요.
      height: 150px; // 원하는 크기로 조정하세요.
    }
    .box h3,
    .description {
      font-size: 0.8rem; // 예시입니다. 실제로는 적절한 크기로 조절해야 합니다.
    }
    .hp {
      top: 120px; // hp를 box의 하단에 배치합니다.
    }
  }

  @media (max-width: 600px) {
    .box-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); // 한 줄에 2개의 박스
      gap: 10px; // 박스 사이의 간격을 설정합니다.
      align-items: center; // 그리드 아이템들을 세로로 중앙 정렬합니다.
      justify-content: center; // 그리드 아이템들을 가로로 중앙 정렬합니다.
      margin: auto; // 컨테이너를 부모 요소의 센터에 위치시킵니다.
    }

    .box h3,
    .description {
      font-size: 0.8rem; // 예시입니다. 실제로는 적절한 크기로 조절해야 합니다.
    }
  }
`;
function Section() {
  const boxes = [
    {
      title: '고철/비철 매입',
      description: '각종 고철, 매입합니다.',
      phoneNumber: '010-9126-9896',
      color: '#4383D8',
    },
    {
      title: '고철/비철 매입',
      description: '각종 고철,비철,특수금속등을 최고가에 매입합니다.',
      phoneNumber: '010-2760-7753',
      color: '#6FA6FF',
    },
    {
      title: '고철/비철 매입',
      description: '각종 고철,비 매입합니다.',
      phoneNumber: '010-9126-9896',
      color: '#00A7EC',
    },
    {
      title: '고철/비철 매입',
      description: '각종 최고가에 매입합니다.',
      phoneNumber: '010-2760-7753',
      color: '#78AEFF',
    },
  ];

  return (
    <InnerContainer>
      <SectionStyle>
        <section className="box-container">
          {boxes.map((box, index) => (
            <article key={index}>
              <div className="box" style={{ backgroundColor: box.color }}>
                <h3>{box.title}</h3>
                <div className="description">{box.description}</div>
                <div className="hp">
                  <a href={`tel:${box.phoneNumber}`}>
                    <button>전화걸기</button>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </SectionStyle>
    </InnerContainer>
  );
}

export default Section;
