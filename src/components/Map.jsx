import { useEffect, useRef } from 'react';
import { styled } from 'styled-components';

const MapStyle = styled.div`
  .map-title {
    font-size: 24px;
    font-weight: 700;
    margin: 50px 0px;
    text-align: center;
    color: #333;
  }

  .map-container {
    width: 100%;
    height: 500px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .tooltip {
    padding: 10px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 600px) {
    .map-title {
      margin-top: 120px;
    }
  }
`;

function Map() {
  const mapRef = useRef(null); // 지도를 담을 div를 참조하기 위한 ref

  useEffect(() => {
    const { naver } = window;
    const mapOptions = {
      center: new naver.maps.LatLng(37.3390585, 127.5643322), // 지도 초기 위치
      zoom: 20, // 초기 확대 비율
    };

    // 지도 생성
    const map = new naver.maps.Map(mapRef.current, mapOptions);

    // 마커 생성
    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(37.3390585, 127.5643322),
      map,
    });
    console.log(marker);

    // 툴팁 생성
    const tooltip = new naver.maps.InfoWindow({
      content:
        '<div class="tooltip">여주고철(경기 여주시 흥천면 능북로 220)</div>',
    });

    // 마커에 마우스 올리면 툴팁 표시
    naver.maps.Event.addListener(marker, 'mouseover', () => {
      tooltip.open(map, marker);
    });

    // 마커에서 마우스 제거하면 툴팁 제거
    naver.maps.Event.addListener(marker, 'mouseout', () => {
      tooltip.close();
    });
  }, []);

  return (
    <MapStyle>
      <h2 className="map-title">오시는길</h2>
      <div ref={mapRef} className="map-container"></div>
    </MapStyle>
  );
}

export default Map;
