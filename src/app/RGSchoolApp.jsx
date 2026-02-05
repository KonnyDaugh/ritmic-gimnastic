import { Routes, Route } from 'react-router-dom';
import './RGSchoolApp.css';
import Navigation from '../components/Navigation';

import SchoolAboutPage from '../pages/SchoolAboutPage';
import CoachesPage from '../pages/CoachesPage';
import CompetitionsPage from '../pages/CompetitionsPage';
import GalleryPage from '../pages/GalleryPage';
import GymnastsPage from '../pages/GymnastsPage';
import VideosPage from '../pages/VideosPage';

const RGSchoolApp = () => {
  return (
    <div className="app-container">
      <Navigation />

      <Routes>
        <Route path="/" element={<SchoolAboutPage />} />
        <Route path="/gymnasts" element={<GymnastsPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/coaches" element={<CoachesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Routes>
    </div>
  );
};

export default RGSchoolApp;