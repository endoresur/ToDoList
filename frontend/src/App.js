import './App.css';
import TodoList from "./components/TodoList";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";
import AppRouter from "./UI/AppRouter";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <AppRouter/>
            </BrowserRouter>

        </div>
    );
}

export default App;