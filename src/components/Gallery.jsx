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
    margin-top: 50px;
  }
  article,
  .box {
    width: 250px;
    height: 250px;
    border-radius: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  button {
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 1000px) {
    .box {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 800px) {
    .box {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 200px;

    .box-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      align-items: center;
      justify-content: center;
      margin: auto;
    }

    .img-container {
      display: flex;
      justify-content: center;
    }
    .box h3,
    .description {
      font-size: 0.8rem;
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
      text: '현대제철 ㆍ동국제강ㆍ환영철강 협력업체',
    },
    {
      src: '/img/img7.jpeg',
      alt: '이미지',
      text: '모든 종류의 폐기물을 최저가처리',
    },
    {
      src: '/img/img9.jpeg',
      alt: '이미지',
      text: '친절하고 정확한 서비스',
    },
  ];

  return (
    <InnerContainer>
      <GalleryStyle>
        <h2>갤러리</h2>
        <div className="box-container">
          {images.map((image, index) => (
            <div key={index} className="img-container">
              <button>
                <img className="box" src={image.src} alt={image.alt} />
                <h3>{image.text}</h3>
              </button>
            </div>
          ))}
        </div>
      </GalleryStyle>
    </InnerContainer>
  );
}

export default Gallery;
