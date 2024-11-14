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
import DashboardPage from "./pages/DashBoardPage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page Route with Header */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <Partners />
                <IntegrationsSection />
                <Testimony />
                <Footer />
              </>
            }
          />

          {/* Login Page Route with Header */}
          <Route
            path="/Login"
            element={
              <>
                <Header />
                <LogInPage />
              </>
            }
          />

          {/* Sign-Up Page Route with Header */}
          <Route
            path="/SignUp"
            element={
              <>
                <Header />
                <SignUpPage />
              </>
            }
          />

          {/* Dashboard Page Route without Header */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
