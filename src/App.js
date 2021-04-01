import './App.css';
import {Navigation} from "./components/navigation/Navigation";
import {Welcome} from "./components/home/Welcome";
import {AboutMe} from "./components/about/AboutMe";
import {Summary} from "./components/skills/Summary";
import {Works} from "./components/work/Works";
import {Contacts} from "./components/contact/Contacts";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import React from "react";

function App() {

    return (
        <div className="App">
            <header>
                <Header/>
                <Navigation/>
            </header>
            <main>
                <Welcome/>
                <AboutMe/>
                <Summary/>
                <Works/>
                <Contacts/>
                <Footer/>
            </main>
        </div>
    );
}

export default App;
