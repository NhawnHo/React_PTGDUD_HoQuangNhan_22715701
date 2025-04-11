import './App.css';
import Menu from './component/Menu';
import Header from './component/Header';
import DashboardDetail from './pages/DashboardDetail';
import Projects from './pages/Projects';
import Teams from './pages/Teams';
import Analytics from './pages/Analytics';
import Message from './pages/Message';
import Integrations from './pages/Integrations';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <div className="grid grid-cols-10 container mx-auto shadow-2xl items-stretch">
                <div className="grid col-span-2 p-5 border-r border-r-gray-200 ">
                    <Menu />
                </div>
                <div className="self-start grid col-span-8">
                    <div className="grid grid-cols-2 h-20 pt-5.5 border-b border-b-gray-200">
                        <Header />
                    </div>
                    {/* Router xử lý điều hướng */}
                    <div>
                        <Routes>
                            <Route
                                path="/dashboard"
                                element={<DashboardDetail />}
                            />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/teams" element={<Teams />} />
                            <Route path="/analytics" element={<Analytics />} />
                            <Route path="/message" element={<Message />} />
                            <Route
                                path="/integrations"
                                element={<Integrations />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
