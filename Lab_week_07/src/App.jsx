import './App.css';
import Dashboard from './component/Dashboard';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';

// Component wrapper vì useLocation không dùng trực tiếp trong App khi dùng Router ngoài
function AppContent() {
    const location = useLocation();

    return (
        <div className="p-4">
            {/* Menu điều hướng */}
            <nav className="mt-10 text-2xl font-bold text-center">
                {location.pathname !== '/dashboard' && (
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-pink-500 font-bold mr-4'
                                : 'text-gray-500 hover:text-pink-500 mr-4'
                        }
                    >
                        Dashboard
                    </NavLink>
                )}
            </nav>

            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
