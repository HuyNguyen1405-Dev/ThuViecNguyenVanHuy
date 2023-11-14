import './App.css';
import { Route, Routes } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';
//Import in folder

import RedirectLogin from './pages/login/redirectLogin';
import Main from './pages/main';
import UserPage from './pages/main/components/User';
import QuyenPage from './pages/main/components/Quyen';
import Dashboard from './pages/main/components/dashboard';

//================================================

function App() {

  const [cookies] = useCookies(['token']);
  const token = cookies.token;
  return (
    <>
      <Routes>
        <Route path="/login" element={<RedirectLogin />} />
        {token ? (
          <Route path="/" element={<Main />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/nguoidung" element={<UserPage />} />
            <Route path="/quyen" element={<QuyenPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Route>
        ) : (
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        )}

      </Routes>
    </>
  );
}

export default App;
