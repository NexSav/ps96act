import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import ClusterTeamPage from './pages/ClusterTeamPage';
import GlobalKidsPage from './pages/GlobalKidsPage';
import HarlemYMCAPage from './pages/HarlemYMCAPage';
import UnionSettlementPage from './pages/UnionSettlementPage';
import CoolCulturePage from './pages/CoolCulturePage';
import CalendarPage from './pages/CalendarPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cluster-classes/team" element={<ClusterTeamPage />} />
        <Route path="/global_kids_inc" element={<GlobalKidsPage />} />
        <Route path="/harlem_ymca" element={<HarlemYMCAPage />} />
        <Route path="/union_settlement" element={<UnionSettlementPage />} />
        <Route path="/cool_culture" element={<CoolCulturePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/elementary" element={<ComingSoonPage />} />
        <Route path="/middle-school" element={<ComingSoonPage />} />
        <Route path="/green-team" element={<ComingSoonPage />} />
        <Route path="/girls-inc" element={<ComingSoonPage />} />
        <Route path="/sports" element={<ComingSoonPage />} />
        <Route path="/directions" element={<ComingSoonPage />} />
        <Route path="/directory/faculty" element={<ComingSoonPage />} />
        <Route path="/dual_language_programs" element={<ComingSoonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
