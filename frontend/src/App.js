import './App.css';
import TodoList from "./components/TodoList";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <TodoList/>
        </div>
    );
}

export default App;