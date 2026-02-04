import './RGSchoolApp.css';
import SchoolAbout from '../pages/SchoolAbout';
import CompetitionsList from '../components/CompetitionsList';
import CoachesList from '../components/CoachesList';
import Gallery from '../components/Gallery';
import GymnastList from '../components/GymnastList';
import VideoGallery from '../components/VideoGallery'

function RGSchoolApp() {

  return (
    <div>
        <h1>RG School App</h1>
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
