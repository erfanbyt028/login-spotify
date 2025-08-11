import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactQueryProvider from './providers/react-query-provider';
import Login from './components/Login';

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
