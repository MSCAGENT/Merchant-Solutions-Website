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
import Partnerships from "./pages/Partnerships";
import ITServices from "./pages/solutions/ITServices";
import MSCTranzActionGateway from "./pages/solutions/MSCTranzActionGateway";
import PaymentProcessingSolution from "./pages/solutions/PaymentProcessingSolution";
import GiftCardsSolution from "./pages/solutions/GiftCardsSolution";
import CryptoProcessingSolution from "./pages/solutions/CryptoProcessingSolution";
import LoyaltyRewardsSolution from "./pages/solutions/LoyaltyRewardsSolution";
import BusinessLoansSolution from "./pages/solutions/BusinessLoansSolution";
import ATMsSolution from "./pages/solutions/ATMsSolution";
import PayrollServicesSolution from "./pages/solutions/PayrollServicesSolution";
import Restaurants from "./pages/Restaurants";
import Healthcare from "./pages/Healthcare";
import SquarePOS from "./pages/SquarePOS";
import IngenicoTerminals from "./pages/IngenicoTerminals";

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
          <Route path="/solutions/payment-processing" element={<PaymentProcessingSolution />} />
          <Route path="/solutions/gift-cards" element={<GiftCardsSolution />} />
          <Route path="/solutions/crypto-processing" element={<CryptoProcessingSolution />} />
          <Route path="/solutions/loyalty-rewards" element={<LoyaltyRewardsSolution />} />
          <Route path="/solutions/business-loans" element={<BusinessLoansSolution />} />
          <Route path="/solutions/atms" element={<ATMsSolution />} />
          <Route path="/solutions/payroll-services" element={<PayrollServicesSolution />} />
          <Route path="/solutions/it-services" element={<ITServices />} />
          <Route path="/solutions/tranzaction-gateway" element={<MSCTranzActionGateway />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
          
          {/* Industry Routes */}
          <Route path="/industries/restaurants" element={<Restaurants />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          
          {/* POS & Hardware Routes */}
          <Route path="/pos/clover" element={<CloverPOS />} />
          <Route path="/pos/square" element={<SquarePOS />} />
          <Route path="/pos/ingenico-terminals" element={<IngenicoTerminals />} />
          <Route path="/pos/pax-terminals" element={<POSHardware />} />
          <Route path="/pos/dejavoo-terminals" element={<DejavooTerminals />} />
          <Route path="/pos/ingenico-terminals" element={<POSHardware />} />
          <Route path="/pos/restaurant-pos" element={<POSHardware />} />
          <Route path="/pos/retail-pos" element={<POSHardware />} />
          <Route path="/pos/qsr-pos" element={<POSHardware />} />
          <Route path="/pos/self-ordering-kiosk" element={<POSHardware />} />
          
          {/* Gateway Routes */}
          <Route path="/gateway/payments-gateway" element={<MSCGateway />} />
          <Route path="/gateway/virtual-terminal" element={<Gateway />} />
          
          {/* Partner Routes */}
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/partners/agents" element={<Partnerships />} />
          
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
