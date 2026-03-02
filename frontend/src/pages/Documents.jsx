import React, { useState, useEffect } from 'react';
import { Lock, FileText, ExternalLink, ChevronDown, ChevronRight, LogOut } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const API = process.env.REACT_APP_BACKEND_URL;

const processorColors = {
  'CYGMA': { bg: 'from-purple-600 to-purple-500', light: 'bg-purple-50 border-purple-200', text: 'text-purple-700' },
  'EPX': { bg: 'from-blue-600 to-blue-500', light: 'bg-blue-50 border-blue-200', text: 'text-blue-700' },
  'TSYS': { bg: 'from-indigo-600 to-indigo-500', light: 'bg-indigo-50 border-indigo-200', text: 'text-indigo-700' }
};

const getColor = (processor) => {
  if (processor.includes('CYGMA')) return processorColors['CYGMA'];
  if (processor.includes('EPX')) return processorColors['EPX'];
  if (processor.includes('TSYS')) return processorColors['TSYS'];
  return processorColors['CYGMA'];
};

const Documents = () => {
  const [token, setToken] = useState(sessionStorage.getItem('doc_token') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    document.title = 'Documents | Merchant Solutions Corp';
    if (token) fetchDocuments();
  }, [token]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/documents/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        const data = await res.json();
        setToken(data.token);
        sessionStorage.setItem('doc_token', data.token);
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    }
    setLoading(false);
  };

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/documents?token=${token}`);
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
        const exp = {};
        data.forEach(c => { exp[c.id] = true; });
        setExpanded(exp);
      } else {
        setToken('');
        sessionStorage.removeItem('doc_token');
      }
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleLogout = () => {
    setToken('');
    sessionStorage.removeItem('doc_token');
    setCategories([]);
  };

  const toggleExpanded = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Login Screen
  if (!token) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <img
              src="https://customer-assets.emergentagent.com/job_4a81af7b-38a3-4377-ab4c-9466c710fd1a/artifacts/m5yh6iet_PNG.png"
              alt="Merchant Solutions Corp"
              className="h-24 mx-auto mb-4 object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="doc-login-h1">Document Portal</h1>
            <p className="text-gray-500">Enter your credentials to access merchant documents.</p>
          </div>
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                  <input
                    type="text" value={username} onChange={e => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter username" required data-testid="doc-username-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password" value={password} onChange={e => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter password" required data-testid="doc-password-input"
                  />
                </div>
                {error && <p className="text-red-500 text-sm" data-testid="doc-login-error">{error}</p>}
                <Button
                  type="submit" disabled={loading}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
                  data-testid="doc-login-btn"
                >
                  {loading ? 'Authenticating...' : 'Access Documents'}
                </Button>
              </form>
            </CardContent>
          </Card>
          <p className="text-center text-gray-400 text-xs mt-6">
            Contact your account representative for login credentials.
          </p>
        </div>
      </div>
    );
  }

  // Document Portal
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold" data-testid="doc-portal-h1">Merchant Documents</h1>
            <p className="text-purple-200 mt-1">Access processor-specific forms and documents</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="doc-logout-btn">
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading documents...</p>
          ) : (
            <div className="space-y-6">
              {categories.map(cat => {
                const colors = getColor(cat.processor);
                return (
                  <Card key={cat.id} className="border border-gray-200 overflow-hidden" data-testid={`doc-category-${cat.id}`}>
                    <button
                      onClick={() => toggleExpanded(cat.id)}
                      className={`w-full px-6 py-5 bg-gradient-to-r ${colors.bg} text-white flex items-center justify-between`}
                    >
                      <div className="text-left">
                        <h2 className="text-xl font-bold">{cat.processor}</h2>
                        {cat.subtitle && <p className="text-sm text-white/70 mt-0.5">{cat.subtitle}</p>}
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-white/70">{cat.documents.length} documents</span>
                        {expanded[cat.id] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                      </div>
                    </button>
                    {expanded[cat.id] && (
                      <CardContent className="p-0">
                        <div className="divide-y divide-gray-100">
                          {cat.documents.map((doc, i) => (
                            <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors" data-testid={`doc-item-${i}`}>
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${colors.light} border`}>
                                  <FileText className={`h-4 w-4 ${colors.text}`} />
                                </div>
                                <span className="text-gray-800 font-medium">{doc.name}</span>
                              </div>
                              {doc.url ? (
                                <a href={doc.url} target="_blank" rel="noopener noreferrer">
                                  <Button size="sm" variant="outline" className={`${colors.text} border-current hover:bg-gray-50`}>
                                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> Open
                                  </Button>
                                </a>
                              ) : (
                                <span className="text-xs text-gray-400 italic">URL pending</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Documents;
