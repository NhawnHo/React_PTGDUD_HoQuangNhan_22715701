import './App.css';
// import Filter from './component/Filter';
import Footer from './component/Footer';
import Header from './component/Header';
import Product from './component/Product';
// import Menu from './component/Menu';
import './index.css';

function App() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <Header />
                </div>
                {/* filter */}
                {/* <Filter /> */}
                <div className=' bg-white'>
                    <Product />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default App;
