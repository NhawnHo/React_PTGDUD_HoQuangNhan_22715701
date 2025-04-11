import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';

function App() {
    return (
        <>
            <div>
                <div className="grid grid-cols-10 container mx-auto shadow-2xl items-stretch">
                    <div className="grid col-span-2 p-5 border-r border-r-gray-200 ">
                        <Menu />
                    </div>
                    <div className="self-start grid col-span-8">
                        <div className="grid grid-cols-2 h-20 pt-5.5 border-b border-b-gray-200">
                            <Header />
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
