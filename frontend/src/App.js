import './App.css';
import UserList from "./components/UserList";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <UserList/>
        </div>
    );
}

export default App;