import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import CurrencyConverterPage from './pages/CurrencyConverterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/create' element={<CreateAccountPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path='/currency-converter' element={<CurrencyConverterPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
