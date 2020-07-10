
import React from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Navbar from './components/Navbar'

export default function App() {
    
    return(
        <div>
            <Router>
                <Navbar />
            </Router>
        </div>
    )
}