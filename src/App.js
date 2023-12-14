import {
    Navigate,
    Route,
    BrowserRouter as Router,
    Routes,
} from 'react-router-dom';
import { Main } from './Components/Main';
import { Step1 } from './Components/Step1';
import { Step2 } from './Components/Step2';
import { Step3 } from './Components/Step3';

function App() {
    return (
        <div className="font-TTTravels-script">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/Main" />} />
                    <Route path="/Main" element={<Main />} />
                    <Route path="/Step1" element={<Step1 />} />
                    <Route path="/Step2" element={<Step2 />} />
                    <Route path="/Step3" element={<Step3 />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
