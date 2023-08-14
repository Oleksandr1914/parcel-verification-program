import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddressPost from './pages/Address/AddressPost';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<AddressPost />} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>
    </>
  );
}

export default App;
