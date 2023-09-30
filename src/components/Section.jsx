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
    justify-content: center;
    height: 250px;
    width: 250px;
    padding: 18px;
    background-color: whitesmoke;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .description {
    margin: 20px 0px;
  }
  button {
    position: absolute;
    top: 200px;
    width: 80px;
    height: 40px;
    background-color: #fdfafaa2; // 불투명한 검은색 배경
    border: none;
    &:hover {
      background-color: #e5edf6; // 마우스 오버 시 색상 변경
    }
  }
  @media (max-width: 1000px) {
    .box {
      width: 200px;
      height: 200px;
    }
    button {
      top: 160px;
      width: 60px;
      height: 30px;
    }
  }

  @media (max-width: 800px) {
    .box {
      width: 150px;
      height: 150px;
    }
    .box h3,
    .description {
      font-size: 0.8rem;
    }
    button {
      top: 120px;
      width: 50px;
      height: 25px;
    }
  }

  @media (max-width: 600px) {
    .box-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    .box h3,
    .description {
      font-size: 0.8rem;
    }
  }
`;

function Section() {
  const boxes = [
    {
      title: '고철/비철 매입',
      description: '고철ㆍ비철ㆍ동ㆍ신주 및 각종 전선류 고가매입합니다.',
      phoneNumber: '010-9126-9896',
      color: '#4383D8',
    },
    {
      title: '동ㆍ신주 및 각종 전선류 매입',
      description: '각종 고철,비철,특수금속등을 최고가에 매입합니다.',
      phoneNumber: '010-2760-7753',
      color: '#6FA6FF',
    },
    {
      title: '중고 자재 및 기계 설비 매입',
      description: '중고 자재 및 기계 설비 최고가 매입합니다.',
      phoneNumber: '010-9126-9896',
      color: '#00A7EC',
    },
    {
      title: '각종철거 및 폐기물 처리',
      description: ' 각종 철거 및 폐기물 처리 최저가 약속드립니다.',
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
