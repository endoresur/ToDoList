import './App.css';
import Header from "./UI/Header";
import {BrowserRouter} from "react-router-dom";
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