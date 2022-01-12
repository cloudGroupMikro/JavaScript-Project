import Header from "./Header"
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage1 from "./homepage/Homepage1";
import Homepage from "./homepage/Homepage";


export default function Home() {
    return (
        <>
        <Router>
            <Navbar>
                <Routes>
                    <Route path="/" element={<Homepage />}exact/>
                </Routes>
            </Navbar>
        </Router>
        <Homepage/>
        </>
    )
}