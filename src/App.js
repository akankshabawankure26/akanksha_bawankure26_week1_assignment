import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedBackForm from './FeedBackForm';
import DisplayUserFeedback from './DisplayUserFeedback';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<FeedBackForm />} />
        <Route path="/displayInfo" element={<DisplayUserFeedback />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
