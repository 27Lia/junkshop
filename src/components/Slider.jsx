import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const SliderStyle = styled.div`
  position: relative;
  height: 450px;
  border-bottom: 1px solid #ddd;

  .img-div {
    position: absolute;
    background-color: #000;
    height: 450px;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    z-index: 1;
  }

  .img-div.active {
    opacity: 1;
    z-index: 2;
  }

  .indicator {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: transform 1s ease-in-out;
    display: flex;
    z-index: 3;

    div {
      width: 10px;
      height: 10px;
      background-color: white;
      margin: 0 5px;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: red;
      }
    }
  }
  .text-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    z-index: 3;
    text-align: center; // 텍스트를 중앙 정렬
    background-color: rgba(0, 0, 0, 0.5); // 불투명한 검은색 배경
    padding: 1rem; // 패딩 추가
    border-radius: 10px; // 모서리 둥글게
    // 텍스트 컨테이너를 더 작게 만들어서 텍스트가 잘 들어가도록
    width: 100%;
    height: 70%;

    h1 {
      font-size: 2.5rem; // 글자 크기를 조절합니다. 필요에 따라 변경 가능합니다.
      margin-bottom: 1rem; // 여백을 추가합니다.
    }

    div {
      font-size: 1.25rem; // 글자 크기를 조절합니다. 필요에 따라 변경 가능합니다.
      margin-bottom: 0.5rem; // 여백을 추가합니다.
    }

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      background-color: #ff5733; // 버튼 배경색
      color: #ffffff; // 버튼 글자색
      border: none;
      border-radius: 5px; // 버튼 모서리 둥글게
      cursor: pointer; // 마우스 포인터 변경

      &:hover {
        background-color: #ff6f47; // 마우스 오버 시 색상 변경
      }
    }
  }
`;

function Slider() {
  const images = ['/img/mainimg.svg', '/img/mainimg2.svg', '/img/mainimg3.svg'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId); // 컴포넌트 unmount시 interval 제거
  }, [images.length]);

  const handleClickIndicator = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderStyle>
      {images.map((image, index) => (
        <div
          key={index}
          className={`img-div ${currentIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleClickIndicator(index)}
            role="button"
            tabIndex={0}
            onKeyDown={() => {}} // 아무 동작도 하지 않음
          />
        ))}
      </div>
      <div className="text-container">
        <h1>24시간 상담 가능!</h1>
        <div>
          고철, 비철, 파지, 폐전선, PCB 등 모든 종류의 폐기물을 최고가로
          매입합니다.
        </div>
        <div>
          고객님의 편의를 위해 항상 친절하고 정확한 서비스를 약속드립니다.
        </div>
        <a href="tel:010-3331-3743">
          {/* 버튼을 클릭하면 전화가 걸리게 하는 링크 */}
          <button>010-3331-3743</button>
        </a>
      </div>
    </SliderStyle>
  );
}
export default Slider;
