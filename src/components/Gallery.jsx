import { styled } from 'styled-components';
import InnerContainer from './InnerContainer.jsx';

const GalleryStyle = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 70px;
  }
  article,
  .box {
    width: 250px;
    height: 250px;
    border-radius: 100%;
  }

  .img-container {
    height: 31vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
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
  }

  @media (max-width: 600px) {
    margin-top: 200px;

    .box-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); // 한 줄에 2개의 박스
      gap: 10px; // 박스 사이의 간격을 설정합니다.
      align-items: center; // 그리드 아이템들을 세로로 중앙 정렬합니다.
      justify-content: center; // 그리드 아이템들을 가로로 중앙 정렬합니다.
      margin: auto; // 컨테이너를 부모 요소의 센터에 위치시킵니다.
    }

    .img-container {
      justify-content: space-evenly;
    }
    .box h3,
    .description {
      font-size: 0.8rem; // 예시입니다. 실제로는 적절한 크기로 조절해야 합니다.
    }
  }
`;

function Gallery() {
  const images = [
    {
      src: '/img/img11.jpeg',
      alt: '이미지',
      text: '고철/비철 각종 고철/비철류 매입',
    },
    {
      src: '/img/img3.jpeg',
      alt: '이미지',
      text: '고철/비철 각종 고철/비철류 매입',
    },
    {
      src: '/img/img7.jpeg',
      alt: '이미지',
      text: '고철/비철 각종 고철/비철류 매입',
    },
    {
      src: '/img/img9.jpeg',
      alt: '이미지',
      text: '고철/비철 각종 고철/비철류 매입',
    },
  ];

  return (
    <InnerContainer>
      <GalleryStyle>
        <h3>갤러리</h3>
        <div className="box-container">
          {images.map((image, index) => (
            <div key={index} className="img-container">
              <img className="box" src={image.src} alt={image.alt} />
              <div>{image.text}</div>
            </div>
          ))}
        </div>
      </GalleryStyle>
    </InnerContainer>
  );
}

export default Gallery;
