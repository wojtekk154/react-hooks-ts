import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storeConfiguration from "./store/store";

import NavigationBar from "./components/layout/Navbar";
import Home from "./pages/home/Home";

import "./App.css";
import { Planets } from "./pages/planets";
import { Films } from "./pages/films";


const App: React.FC = (): React.ReactElement => {
    return (
        <Provider store={storeConfiguration}>
            <Router>
                <div className="App">
                    <NavigationBar/>

                    <div className="PageContainer">
                        <Route exact path="/" component={Home} key="home"/>
                        <Route path="/planets" component={Planets} key="planets"/>
                        <Route path="/films" component={Films} key="films"/>
                    </div>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
