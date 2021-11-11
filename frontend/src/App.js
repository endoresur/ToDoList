import './App.css';
import TodoList from "./components/TodoList";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./pages/About";
import Main from "./pages/Main";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Header/>
                <Route path={""}>
                    <Main/>
                </Route>
                <Route path={"/about"}>
                    <About/>
                </Route>
                <Route path={"/todos"}>
                    <TodoList/>
                </Route>

            </BrowserRouter>

        </div>
    );
}

export default App;