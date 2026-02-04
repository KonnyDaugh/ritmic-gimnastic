import './RGSchoolApp.css';
import SchoolAbout from '../pages/SchoolAbout';
import CompetitionsList from '../components/CompetitionsList';
import CoachesList from '../components/CoachesList';
import Gallery from '../components/Gallery';

function RGSchoolApp() {

  return (
    <div>
        <h1>RG School App</h1>
        <SchoolAbout />
        <CompetitionsList />
        <CoachesList />
        <Gallery />
    </div>
  )
}

export default RGSchoolApp;
