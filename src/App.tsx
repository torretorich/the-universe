import React, {useState} from 'react';
import './App.css';
import Home from '../src/Home/universe'
import Footer from "./Footer/footer";
import './footer.css'
import './navbar.css'
import WebNavigation from "./Navbar/webNavigation";

function App() {
    const [showNavbar, setShowNavbar] = useState(false)
    return (
        <>
            <WebNavigation showNavbar={showNavbar} setShowNavbar={setShowNavbar}/>
            <div className="App">
                <Home/>
            </div>
            <div className={"footer"}>
                <Footer/>
            </div>
        </>

    );
}

export default App;
