import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import AboutMSC from "./pages/AboutMSC";
import FoodTruckPOS from "./pages/FoodTruckPOS";
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
import Chiropractors from "./pages/Chiropractors";
import SquarePOS from "./pages/SquarePOS";
import IngenicoTerminals from "./pages/IngenicoTerminals";
import Careers from "./pages/Careers";
import ISVPartnerships from "./pages/ISVPartnerships";
import DentalPractices from "./pages/DentalPractices";
import MedicalClinics from "./pages/MedicalClinics";
import HighRiskMerchant from "./pages/HighRiskMerchant";
import SalonSpa from "./pages/SalonSpa";
import DaySmartSalon from "./pages/DaySmartSalon";
import SpecialtyMerchant from "./pages/SpecialtyMerchant";
import Exatouch from "./pages/Exatouch";
import RetailSolutions from "./pages/RetailSolutions";
import Pricing from "./pages/Pricing";
import BlogAdmin from "./pages/BlogAdmin";
import { BlogList, BlogPost } from "./pages/Blog";
import Documents from "./pages/Documents";
import SelfOrderingKiosk from "./pages/SelfOrderingKiosk";
import ProfessionalServices from "./pages/ProfessionalServices";
import DualPricing from "./pages/solutions/DualPricing";
import GasStationProcessing from "./pages/industries/GasStationProcessing";
import B2BProcessing from "./pages/industries/B2BProcessing";
import FoodTrucks from "./pages/industries/FoodTrucks";
import CloudKitchens from "./pages/industries/CloudKitchens";
import DeliveryOnly from "./pages/industries/DeliveryOnly";

// New placeholder pages
import MerchantRewards from "./pages/solutions/MerchantRewards";
import LinesOfCredit from "./pages/solutions/LinesOfCredit";
import ACHProcessing from "./pages/solutions/ACHProcessing";
import ATMDeployer from "./pages/solutions/ATMDeployer";
import POSOverview from "./pages/pos/POSOverview";
import SmartTerminals from "./pages/pos/SmartTerminals";
import PaymentTerminalsOverview from "./pages/pos/PaymentTerminalsOverview";
import PAXTerminals from "./pages/pos/PAXTerminals";
import CloverKiosk from "./pages/pos/CloverKiosk";
import QRCodeOrdering from "./pages/pos/QRCodeOrdering";
import VirtualTerminal from "./pages/pos/VirtualTerminal";
import PaymentLinks from "./pages/pos/PaymentLinks";
import UnionPOS from "./pages/pos/UnionPOS";
import PricingOverview from "./pages/PricingOverview";
import PaymentProcessingPricing from "./pages/pricing/PaymentProcessingPricing";
import SubscriptionPaymentProcessing from "./pages/pricing/SubscriptionPaymentProcessing";
import FreePOSProgram from "./pages/pricing/FreePOSProgram";
import POSSubscription from "./pages/POSSubscription";
import FreePOS from "./pages/FreePOS";
import WhiteLabelPartner from "./pages/WhiteLabelPartner";
import WhiteLabelMerchantServices from "./pages/pricing/WhiteLabelMerchantServices";
import Support from "./pages/Support";
import ServiceAreas from "./pages/ServiceAreas";
import VoiceAIAutomation from "./pages/solutions/VoiceAIAutomation";

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
          <Route path="/solutions/merchant-rewards" element={<MerchantRewards />} />
          <Route path="/solutions/lines-of-credit" element={<LinesOfCredit />} />
          <Route path="/solutions/ach-processing" element={<ACHProcessing />} />
          <Route path="/solutions/atm-deployer" element={<ATMDeployer />} />
          <Route path="/solutions/:solutionId" element={<SolutionDetail />} />
          
          {/* Industry Routes */}
          <Route path="/industries/restaurants" element={<Restaurants />} />
          <Route path="/restaurant-payment-processing-services" element={<Restaurants />} />
          <Route path="/restaurant-payment-processing-florida" element={<Restaurants />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/chiropractors" element={<Chiropractors />} />
          <Route path="/dental-payment-processing-emr-integration" element={<DentalPractices />} />
          <Route path="/industries/dental" element={<DentalPractices />} />
          <Route path="/medical-clinic-payment-processing" element={<MedicalClinics />} />
          <Route path="/medical-payment-processing-emr-integration" element={<MedicalClinics />} />
          <Route path="/industries/medical-clinics" element={<MedicalClinics />} />
          <Route path="/high-risk-merchant-services" element={<HighRiskMerchant />} />
          <Route path="/industries/high-risk" element={<HighRiskMerchant />} />
          <Route path="/salon-spa-payment-processing" element={<SalonSpa />} />
          <Route path="/industries/salon-spa" element={<SalonSpa />} />
          <Route path="/specialty-merchant-payment-solutions" element={<SpecialtyMerchant />} />
          <Route path="/industries/specialty-merchants" element={<SpecialtyMerchant />} />
          <Route path="/industries/:industryId" element={<IndustryDetail />} />
          <Route path="/retail-payment-solutions" element={<RetailSolutions />} />
          <Route path="/industries/retail" element={<RetailSolutions />} />
          <Route path="/professional-services-payment-processing-clover-pos" element={<ProfessionalServices />} />
          <Route path="/industries/professional-services" element={<ProfessionalServices />} />
          <Route path="/emv-gas-station-payment-processing" element={<GasStationProcessing />} />
          <Route path="/industries/gas-station" element={<GasStationProcessing />} />
          <Route path="/industries/b2b-processing" element={<B2BProcessing />} />
          <Route path="/industries/food-trucks" element={<Navigate to="/food-trucks-pos" replace />} />
          <Route path="/industries/cloud-kitchens" element={<CloudKitchens />} />
          <Route path="/industries/delivery-only" element={<DeliveryOnly />} />
          
          {/* POS & Hardware Routes */}
          <Route path="/pos/overview" element={<POSOverview />} />
          <Route path="/pos-systems" element={<POSOverview />} />
          <Route path="/pos/clover" element={<CloverPOS />} />
          <Route path="/clover-pos-system" element={<CloverPOS />} />
          <Route path="/pos/square" element={<SquarePOS />} />
          <Route path="/pos/ingenico-terminals" element={<IngenicoTerminals />} />
          <Route path="/pos/pax-terminals" element={<PAXTerminals />} />
          <Route path="/pos/dejavoo-terminals" element={<DejavooTerminals />} />
          <Route path="/pos/exatouch" element={<Exatouch />} />
          <Route path="/pos/smart-terminals" element={<SmartTerminals />} />
          <Route path="/pos/payment-terminals-overview" element={<PaymentTerminalsOverview />} />
          <Route path="/payment-terminals" element={<PaymentTerminalsOverview />} />
          <Route path="/pos/clover-kiosk" element={<CloverKiosk />} />
          <Route path="/clover-kiosk" element={<CloverKiosk />} />
          <Route path="/pos/qr-ordering" element={<QRCodeOrdering />} />
          <Route path="/qr-code-mobile-ordering" element={<QRCodeOrdering />} />
          <Route path="/pos/virtual-terminal" element={<VirtualTerminal />} />
          <Route path="/pos/payment-links" element={<PaymentLinks />} />
          <Route path="/pos/union" element={<UnionPOS />} />
          <Route path="/union-pos-system" element={<UnionPOS />} />
          <Route path="/best-self-ordering-kiosk-for-restaurants" element={<SelfOrderingKiosk />} />
          <Route path="/pos/self-ordering-kiosk" element={<SelfOrderingKiosk />} />
          <Route path="/retail-software/daysmart-salon" element={<DaySmartSalon />} />
          <Route path="/pos/daysmart-salon" element={<DaySmartSalon />} />
          
          {/* Gateway Routes */}
          <Route path="/voice-ai-business-automation" element={<VoiceAIAutomation />} />
          <Route path="/food-trucks-pos" element={<FoodTruckPOS />} />
          <Route path="/dual-pricing-cash-discount-payment-processing" element={<DualPricing />} />
          <Route path="/solutions/dual-pricing" element={<DualPricing />} />
          <Route path="/gateway/payments-gateway" element={<MSCGateway />} />
          <Route path="/gateway/virtual-terminal" element={<Gateway />} />
          
          {/* Pricing Routes */}
          <Route path="/payment-processing-pricing" element={<PaymentProcessingPricing />} />
          <Route path="/subscription-payment-processing" element={<SubscriptionPaymentProcessing />} />
          <Route path="/free-pos-system" element={<FreePOSProgram />} />
          <Route path="/pricing" element={<PricingOverview />} />
          <Route path="/pricing/pos-subscription" element={<POSSubscription />} />
          <Route path="/pricing/free-pos" element={<FreePOS />} />
          <Route path="/resources/pricing" element={<Pricing />} />
          
          {/* Partner Routes */}
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/partnerships/careers" element={<Careers />} />
          <Route path="/partnerships/isv" element={<ISVPartnerships />} />
          <Route path="/partnerships/white-label" element={<WhiteLabelPartner />} />
          <Route path="/white-label-merchant-services" element={<WhiteLabelMerchantServices />} />
          <Route path="/partners/agents" element={<Partnerships />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blog" element={<BlogList />} />
          <Route path="/resources/blog/admin" element={<BlogAdmin />} />
          <Route path="/resources/blog/:slug" element={<BlogPost />} />
          <Route path="/resources/documents" element={<Documents />} />
          <Route path="/resources/payment-processing" element={<Resources />} />
          <Route path="/resources/pos-systems" element={<Resources />} />
          <Route path="/resources/high-risk-merchants" element={<Resources />} />
          <Route path="/resources/industry-guides" element={<Resources />} />
          
          {/* Company Routes */}
          <Route path="/about-merchant-solutions-corp" element={<AboutMSC />} />
          <Route path="/company/about" element={<AboutMSC />} />
          <Route path="/company/mission" element={<About />} />
          <Route path="/company/why-us" element={<About />} />
          <Route path="/company/security-compliance" element={<Security />} />
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/support" element={<Support />} />
          <Route path="/company/service-areas" element={<ServiceAreas />} />
          
          {/* Login Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/agent-login" element={<Login />} />
          <Route path="/developer-login" element={<Login />} />
          
          {/* Legal Pages */}
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
