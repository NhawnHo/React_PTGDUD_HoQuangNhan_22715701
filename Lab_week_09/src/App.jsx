import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';
import RecipeSection from './component/RecipeSection';
import EditorPick from './component/EditorPick';
import Footer from './component/Footer';
import RecipesWithVideos from './component/RecipesWithVideos';

function App() {
    return (
        <>
            <div className="px-6 max-w-[1440px] mx-auto">
                <Header />
                <Hero />
                <RecipeSection />
                <RecipesWithVideos />
                <EditorPick />
                <Footer />
            </div>
        </>
    );
}

export default App;
