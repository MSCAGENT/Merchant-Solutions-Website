import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Shield, 
  Zap,
  RefreshCw,
  Lock,
  BarChart3,
  Globe,
  Wallet,
  TrendingUp,
  Users,
  Building2,
  CreditCard,
  DollarSign,
  ArrowRightLeft,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';

const CryptoProcessingSolution = () => {
  const keyBenefits = [
    { title: 'Lower Fees', desc: 'Reduce transaction costs' },
    { title: 'Global Reach', desc: 'Accept payments worldwide' },
    { title: 'Fast Settlement', desc: 'Quick access to funds' },
    { title: 'No Chargebacks', desc: 'Eliminate fraud disputes' }
  ];

  const supportedCrypto = [
    { name: 'Bitcoin (BTC)', desc: 'The original cryptocurrency' },
    { name: 'Ethereum (ETH)', desc: 'Smart contract platform' },
    { name: 'USD Coin (USDC)', desc: 'Stable dollar-pegged coin' },
    { name: 'Tether (USDT)', desc: 'Popular stablecoin' },
    { name: 'Litecoin (LTC)', desc: 'Fast transaction times' },
    { name: 'Bitcoin Cash (BCH)', desc: 'Lower fees than BTC' }
  ];

  const howItWorksSteps = [
    { step: '1', title: 'Customer Pays', desc: 'Customer scans QR code or sends to wallet address' },
    { step: '2', title: 'Instant Conversion', desc: 'Crypto is converted to USD in real-time' },
    { step: '3', title: 'Settlement', desc: 'Funds deposited to your bank account' }
  ];

  const merchantBenefits = [
    'Accept crypto without holding crypto',
    'Automatic conversion to USD',
    'No volatility risk',
    'Same-day or next-day settlement',
    'Integrated reporting',
    'POS and eCommerce compatible'
  ];

  const useCases = [
    { icon: Globe, title: 'eCommerce', desc: 'Accept crypto payments on your website' },
    { icon: Building2, title: 'Retail', desc: 'In-store crypto payments via POS' },
    { icon: Users, title: 'Services', desc: 'Invoice clients in cryptocurrency' },
    { icon: TrendingUp, title: 'High-Ticket', desc: 'Large purchases with lower fees' }
  ];

  const securityFeatures = [
    { icon: Lock, title: 'Secure Wallets', desc: 'Enterprise-grade wallet security' },
    { icon: ShieldCheck, title: 'Compliance', desc: 'Full KYC/AML compliance' },
    { icon: Shield, title: 'Insurance', desc: 'Protected against theft' },
    { icon: BarChart3, title: 'Monitoring', desc: 'Real-time transaction tracking' }
  ];

  const integrationOptions = [
    'Payment gateway API',
    'Shopping cart plugins',
    'POS terminal integration',
    'Invoice and billing systems',
    'Mobile payment apps',
    'Custom integrations'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cryptocurrency Payment Processing for Business
            </h1>
            
            <p className="text-xl text-purple-600 font-semibold mb-4">
              Accept Bitcoin, Ethereum, and Stablecoins with Instant USD Conversion
            </p>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Expand your payment options with secure cryptocurrency processing. Accept digital currencies from customers worldwide and receive settlement in USD.
              </p>
              <p>
                No crypto expertise required. We handle the conversion, compliance, and settlement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-6 shadow-lg" data-testid="hero-get-started-btn">
                  Get Started
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6" data-testid="hero-learn-more-btn">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Cryptocurrencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Cryptocurrencies</h2>
            <p className="text-lg text-gray-600">Accept the most popular digital currencies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedCrypto.map((crypto, index) => (
              <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                <CardContent className="p-4">
                  <Wallet className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">{crypto.name}</h3>
                  <p className="text-xs text-gray-500">{crypto.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Crypto Processing Works</h2>
            <p className="text-lg text-gray-600">Simple, secure, and automatic</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorksSteps.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Merchant Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Merchant Benefits</h2>
              </div>
              <p className="text-xl text-purple-600 font-medium mb-4">Get Paid in USD, Not Crypto</p>
              <p className="text-lg text-gray-600 mb-6">
                Accept cryptocurrency payments without the complexity of managing digital assets. We convert everything to USD automatically.
              </p>
              <div className="space-y-3">
                {merchantBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="merchant-benefits-image">
              <div className="text-center text-gray-400">
                <ArrowRightLeft className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Crypto to USD Conversion Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600">Crypto payments for every business type</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600 text-sm">{useCase.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-yellow-50 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center" data-testid="integration-image">
              <div className="text-center text-gray-400">
                <Globe className="h-24 w-24 mx-auto mb-4 text-purple-300" />
                <p className="text-sm">Integration Options Image</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Integration Options</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Connect crypto payments to your existing systems with flexible integration options.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {integrationOptions.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
            <p className="text-lg text-gray-600">Enterprise-grade protection for your crypto transactions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-purple-600 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Accept Cryptocurrency?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start accepting Bitcoin, Ethereum, and stablecoins with automatic USD conversion. No crypto expertise required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6" data-testid="cta-get-started-btn">
                Get Started
              </Button>
            </Link>
            <a href="https://api.leadconnectorhq.com/widget/form/Cl4w9PGXt9QGEieIbn9A" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-6" data-testid="cta-contact-btn">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-600">
            Merchant Solutions Corp provides cryptocurrency payment processing, Bitcoin payment solutions, and digital currency merchant services for businesses across all 50 US states. Accept Bitcoin, Ethereum, USDC, and other cryptocurrencies with instant USD conversion and same-day settlement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CryptoProcessingSolution;
