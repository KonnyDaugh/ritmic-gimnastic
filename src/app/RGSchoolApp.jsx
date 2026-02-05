import './RGSchoolApp.css';
import SchoolAbout from '../pages/SchoolAbout';
import CompetitionsList from '../components/CompetitionsList';
import CoachesList from '../components/CoachesList';
import Gallery from '../components/Gallery';
import GymnastList from '../components/GymnastList';
import VideoGallery from '../components/VideoGallery';
import Navigation from '../components/Navigation';

function RGSchoolApp() {

  return (
    <div className='app-container' >
        <Navigation />
        <SchoolAbout />
        <CompetitionsList />
        <CoachesList />
        <Gallery />
        <GymnastList />
        <VideoGallery />
    </div>
  )
}

export default RGSchoolApp;
