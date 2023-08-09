import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<div>History</div>} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
