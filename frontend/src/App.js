import './App.css';
import LandingPage from './pages/landing';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/Home';
import History from './pages/history';

export default function App() {
    return (
        <div className='App'>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='/auth' element={<Authentication />} />
                        <Route path='/home' element={<HomeComponent />} />
                        <Route path='/history' element={<History />} />
                        <Route path='/:url' element={<VideoMeetComponent />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    )
}