import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const SectionStyle = styled.section`
  width: 100%;
  display: flex;
  height: 40vh;
  section {
    display: flex;
    justify-content: space-between;
    height: 40vh;
    width: 100%;
    align-items: center;
  }

  .box {
    width: 250px;
    height: 250px;
    padding: 25px;
    background-color: whitesmoke;
  }
  .description {
    margin: 20px 0px;
  }
  button {
  }
`;
function Section() {
  const boxes = [
    {
      title: '고철/비철 매입',
      description: '각종 고철,비철,특수금속등을 최고가에 매입합니다.',
      phoneNumber: '010-9126-9896',
      color: '#4383D8',
    },
    {
      title: '제목2',
      description: '설명2',
      phoneNumber: '010-5678-1234',
      color: '#6FA6FF',
    },
    {
      title: '제목3',
      description: '설명3',
      phoneNumber: '010-3456-7890',
      color: '#00A7EC',
    },
    {
      title: '제목4',
      description: '설명4',
      phoneNumber: '010-9876-5432',
      color: '#78AEFF',
    },
  ];

  return (
    <InnerContainer>
      <SectionStyle>
        <section>
          {boxes.map((box, index) => (
            <article key={index}>
              <div className="box" style={{ backgroundColor: box.color }}>
                <h3>{box.title}</h3>
                <div className="description">{box.description}</div>
                <a href={`tel:${box.phoneNumber}`}>
                  <button>전화걸기</button>
                </a>
              </div>
            </article>
          ))}
        </section>
      </SectionStyle>
    </InnerContainer>
  );
}

export default Section;
