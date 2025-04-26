
import Banner from './components/Banner';
import ContentSection from './components/ContentSection';
import Header from './components/Header';
import NavHeader from './components/NavHeader';
import OrganizationalStructure from './components/OrganizationalStructure';
import UniversityFooter from './components/UniversityFooter';
import './App.css';
function App() {
    return (
        <>
            <div className="w-full bg-gray-50">
                <Header />
                <div className="mx-[15vw] pb-50 bg-gray-200 flex justify-center items-center">
                    <img src="./src/assets/logo.png" alt="" />
                </div>

                <div className="mx-[20vw] -mt-40">
                    <NavHeader />
                    <Banner />
                </div>
                <div className="mx-[20vw]">
                    <OrganizationalStructure />
                </div>
                <div className="mx-[20vw]">
                    <ContentSection />
                </div>
                <div className="mx-[20vw]">
                    <UniversityFooter />
                </div>
            </div>
        </>
    );
}

export default App;
