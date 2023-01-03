import React from 'react';
import './App.css';
import Header from './Components/GeneralComponents/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Components/LandingPage/Landing';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Footer from './Components/GeneralComponents/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/SCUBA DIVING" element={<Landing />} />
      <Route path="/PADI COURSES" element={<Landing />} />
      <Route path="/LIVEABOARDS" element={<Landing />} />
      <Route path="/CONTACT" element={<Landing />} />
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
