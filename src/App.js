import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import UserPreferencesPage from "./pages/profile/UserPreferencesPage";
import DetailNews from "./pages/DetailNews";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RegisterPage from "./pages/auth/RegisterPage";
import PrivateRoute from "./configs/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<DashboardPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/detail" element={<DetailNews />} />
        </Route>

        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
