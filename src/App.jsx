import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="/" element={<div>Home</div>} />
        <Route path="/history" element={<div>History</div>} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
