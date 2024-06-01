import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/pages/Home/index.jsx";
import Register from "./components/pages/Register/index.jsx";
import Header from "./components/layouts/Header/index.jsx";
import Profile from "./components/pages/Profile/index.jsx";
import AboutMe from "./components/pages/Profile/AboutMe/index.jsx";
import Settings from "./components/pages/Profile/Settings/index.jsx";

function App() {
  return (
    <main className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="about-me" element={<AboutMe />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </main>
  );
}

export default App;
