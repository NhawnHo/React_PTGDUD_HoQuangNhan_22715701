import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer'; // Thêm Footer nếu có
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            {/* Header luôn hiển thị trên tất cả các trang */}
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Footer luôn hiển thị trên tất cả các trang */}
            <Footer />
        </Router>
    );
}

export default App;
