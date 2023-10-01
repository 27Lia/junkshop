import Gallery from '../components/Gallery.jsx';
import InnerContainer from '../components/InnerContainer.jsx';
import Map from '../components/Map.jsx';
import Nav from '../components/Nav.jsx';
import Section from '../components/Section.jsx';
import Slider from '../components/Slider.jsx';

function MainPage() {
  return (
    <>
      <Nav />
      <Slider />
      <Section />
      <Gallery />
      <InnerContainer>
        <Map />
      </InnerContainer>
    </>
  );
}

export default MainPage;
