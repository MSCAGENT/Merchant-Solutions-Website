import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Login = () => {
  const { toast } = useToast();
  const [loginType, setLoginType] = useState('merchant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login
    toast({
      title: 'Login Successful!',
      description: `Welcome back to your ${loginType} dashboard.`,
      duration: 5000
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-yellow-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome Back</h1>
          <p className="text-xl text-gray-600">Sign in to access your account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Login Type Selection */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Account Type</h2>
            <Card
              className={`cursor-pointer transition-all duration-200 ${
                loginType === 'merchant'
                  ? 'border-2 border-purple-600 shadow-lg'
                  : 'border-2 border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setLoginType('merchant')}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-yellow-400 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Merchant Login</h3>
                    <p className="text-sm text-gray-600">Access your merchant dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all duration-200 ${
                loginType === 'agent'
                  ? 'border-2 border-purple-600 shadow-lg'
                  : 'border-2 border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setLoginType('agent')}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Agent/Partner Login</h3>
                    <p className="text-sm text-gray-600">Access partner portal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer transition-all duration-200 ${
                loginType === 'developer'
                  ? 'border-2 border-purple-600 shadow-lg'
                  : 'border-2 border-gray-200 hover:border-purple-300'
              }`}
              onClick={() => setLoginType('developer')}
            >
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Developer Login</h3>
                    <p className="text-sm text-gray-600">Access API dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Login Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {loginType === 'merchant' && 'Merchant Login'}
                  {loginType === 'agent' && 'Agent/Partner Login'}
                  {loginType === 'developer' && 'Developer Login'}
                </CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-purple-600 hover:text-purple-700">
                      Forgot password?
                    </a>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-lg py-6">
                    Sign In
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/contact" className="text-purple-600 hover:text-purple-700 font-semibold">
                      Sign up now
                    </Link>
                  </p>
                </div>

                {/* Quick Links */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-purple-50 to-yellow-50">
                    <CardContent className="p-4 text-center">
                      <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <p className="text-sm font-semibold text-gray-900">Need Help?</p>
                      <p className="text-xs text-gray-600">24/7 Support</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-50 to-yellow-50">
                    <CardContent className="p-4 text-center">
                      <svg className="w-8 h-8 text-purple-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm font-semibold text-gray-900">API Docs</p>
                      <p className="text-xs text-gray-600">For Developers</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;