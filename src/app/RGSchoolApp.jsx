import './RGSchoolApp.css';
import SchoolAbout from '../pages/SchoolAbout';
import CompetitionsList from '../components/CompetitionsList';
import CoachesList from '../components/CoachesList';

function RGSchoolApp() {

  return (
    <div>
        <h1>RG School App</h1>
        <SchoolAbout />
        <CompetitionsList />
        <CoachesList />
    </div>
  )
}

export default RGSchoolApp;
