import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path="/TheBibleApp.github.io/"
                        element={<LandingPage />}
                    />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
