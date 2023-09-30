import Gallery from '../components/Gallery.jsx';
import Nav from '../components/Nav.jsx';
import Section from '../components/Section.jsx';
import Slider from '../components/Slider.jsx';

function MainPage() {
  return (
    <>
      <Nav />
      <Slider />;
      <Section />
      <Gallery />
    </>
  );
}

export default MainPage;
