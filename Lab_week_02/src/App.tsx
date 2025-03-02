import './App.css';
import './index.css';
import Lab01 from './components/Lab01';
import Lab01_2 from './components/Lab01_2';
import Calculation from './components/Calculation';
import TodoApp from './components/TodoApp';

function App() {
    return (
        <>
            <h1>Bài 1</h1> <br />
            <Lab01 />
            <h1>Bài 2: Sum a, b</h1> <br />
            <Lab01_2 />
            <h1>Bài 3: Calculation</h1>
            <br />
            <Calculation />
            <br />
            <br />
            <h1>Bài 4: To do App</h1> <br />
            <TodoApp />
        </>
    );
}

export default App;
