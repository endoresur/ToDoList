import logo from './logo.svg';
import './App.css';
import UserList from "./components/UserList";
import MyNavbar from "./UI/MyNavbar";

function App() {
    return (
        <div className="App">
            <MyNavbar/>
            <UserList/>
        </div>

    );
}

export default App;