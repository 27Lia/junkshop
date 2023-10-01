import { styled } from 'styled-components';
import { useState, useEffect } from 'react';

const SliderStyle = styled.div`
  position: relative;
  height: 450px;

  .img-div {
    position: absolute;
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
    z-index: 999;

    div {
      width: 10px;
      height: 10px;
      background-color: #ffffff;
      margin: 0 5px;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: #2e74ff;
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
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // Subtle shadow
    height: 100%;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    div {
      font-size: 1.25rem;
      margin-bottom: 0.6rem;
    }

    button {
      width: 120px;
      height: 40px;
      text-align: center;
      padding: 0.5rem;
      font-size: 1rem;
      background-color: #f8f6f6f0;
      color: #000000;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #d2d1d1ec;
      }
    }

    .main-text {
      font-size: 1.5rem;
      font-weight: bold;
      background-color: #e04e15;
      color: #ffffff;
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      margin-bottom: 40px;
    }

    .hp {
      display: flex;
      margin-top: 10px;
      gap: 10px;
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
        <h1>24시간 상담 가능</h1>
        <div className="main-text">현대제철 ㆍ동국제강ㆍ환영철강 협력업체</div>
        <div>
          고철, 비철, 파지, 폐전선, PCB 등 모든 종류의 폐기물을 최저가로
          처리합니다.
        </div>
        <div>
          고객님의 편의를 위해 항상 친절하고 정확한 서비스를 약속드립니다.
        </div>
        <div className="hp">
          <a href="tel:010-2760-7753">
            <button>전화하기</button>
          </a>
          <a href="sms:010-9126-9896">
            <button>문자 보내기</button>
          </a>
        </div>
      </div>
    </SliderStyle>
  );
}
export default Slider;
