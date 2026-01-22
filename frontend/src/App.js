import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SolutionDetail from "./pages/SolutionDetail";
import IndustryDetail from "./pages/IndustryDetail";
import POSHardware from "./pages/POSHardware";
import Gateway from "./pages/Gateway";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Security from "./pages/Security";
import Login from "./pages/Login";
import PayAnywhere from "./pages/PayAnywhere";
import CloverPOS from "./pages/CloverPOS";
import DejavooTerminals from "./pages/DejavooTerminals";
import MSCGateway from "./pages/MSCGateway";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payanywhere" element={<PayAnywhere />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
          
          {/* Industry Routes */}
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          
          {/* POS & Hardware Routes */}
          <Route path="/pos/clover" element={<CloverPOS />} />
          <Route path="/pos/pax-terminals" element={<POSHardware />} />
          <Route path="/pos/dejavoo-terminals" element={<DejavooTerminals />} />
          <Route path="/pos/ingenico-terminals" element={<POSHardware />} />
          <Route path="/pos/restaurant-pos" element={<POSHardware />} />
          <Route path="/pos/retail-pos" element={<POSHardware />} />
          <Route path="/pos/qsr-pos" element={<POSHardware />} />
          <Route path="/pos/self-ordering-kiosk" element={<POSHardware />} />
          
          {/* Gateway Routes */}
          <Route path="/gateway/payments-gateway" element={<Gateway />} />
          <Route path="/gateway/virtual-terminal" element={<Gateway />} />
          <Route path="/gateway/api-integrations" element={<Gateway />} />
          <Route path="/gateway/mobile-payments" element={<Gateway />} />
          <Route path="/gateway/secure-checkout" element={<Gateway />} />
          
          {/* Partner Routes */}
          <Route path="/partners/agents" element={<Partners />} />
          <Route path="/partners/iso-program" element={<Partners />} />
          <Route path="/partners/white-label" element={<Partners />} />
          <Route path="/partners/financial-institutions" element={<Partners />} />
          <Route path="/partners/careers" element={<Partners />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blog" element={<Resources />} />
          <Route path="/resources/payment-processing" element={<Resources />} />
          <Route path="/resources/pos-systems" element={<Resources />} />
          <Route path="/resources/high-risk-merchants" element={<Resources />} />
          <Route path="/resources/industry-guides" element={<Resources />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/mission" element={<About />} />
          <Route path="/company/why-us" element={<About />} />
          <Route path="/company/security-compliance" element={<Security />} />
          <Route path="/company/contact" element={<Contact />} />
          
          {/* Login Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/agent-login" element={<Login />} />
          <Route path="/developer-login" element={<Login />} />
          
          {/* Legal Pages (placeholder routes) */}
          <Route path="/privacy-policy" element={<About />} />
          <Route path="/terms-of-service" element={<About />} />
          <Route path="/security" element={<Security />} />
          <Route path="/compliance" element={<Security />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
