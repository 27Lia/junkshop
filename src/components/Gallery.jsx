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
