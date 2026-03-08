import React from 'react';
import { Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import { Button } from '../components/ui/button';

const PlaceholderPage = ({ title, subtitle, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative w-full min-h-[400px] overflow-hidden bg-gray-900 flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-purple-900/70 to-gray-900/80" />
        <div className="relative z-10 w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg" data-testid="placeholder-h1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-purple-200 font-semibold mb-4">{subtitle}</p>
            )}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Construction className="h-16 w-16 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            {description || 'This page is currently being built. Check back soon for full content.'}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white" data-testid="placeholder-contact-btn">
                Contact Us
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" data-testid="placeholder-home-btn">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlaceholderPage;
