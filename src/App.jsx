import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
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
