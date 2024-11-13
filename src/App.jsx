// src/App.jsx
import React from 'react';
import Header from './Header.jsx';
import HeroSection from './HeroSection.jsx';
import Partners from './Partners.jsx';
import Footer from './Footer.jsx';
import Testimony from './Test.jsx';
import SignUpPage from "./pages/SignUpPage.jsx";
import IntegrationsSection from './IntegrationsSection.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogInPage from './pages/LogInPage.jsx';
import DashboardPage from "./pages/DashBoardPage.jsx"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          {/* Landing Page Route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Partners />
                <IntegrationsSection />
                <Testimony />
                <Footer />
              </>
            }
          />

          {/* Login Page Route */}
          <Route path="/Login" element={<LogInPage />} />

          {/* Sign-Up Page Route */}
          <Route path="/SignUp" element={<SignUpPage />} />

          <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
