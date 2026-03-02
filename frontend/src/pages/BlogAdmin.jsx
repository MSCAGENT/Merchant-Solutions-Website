import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, Eye, EyeOff, ArrowLeft, Save, X, Hash, Tag, Image, Lock, LogOut, Upload, FileText, Paperclip, Globe, GlobeIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const API = process.env.REACT_APP_BACKEND_URL;

const CONTENT_TYPES = [
  { value: 'blog', label: 'Blog Post' },
  { value: 'article', label: 'Payment Processing Article' },
  { value: 'guide', label: 'POS System Guide' }
];

const BlogAdmin = () => {
  const [token, setToken] = useState(sessionStorage.getItem('blog_token') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);

  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const emptyPost = {
    content_type: 'blog', title: '', topic: '', subject: '', content: '', excerpt: '',
    hashtags: '', keywords: '', cover_image: '', author: 'Merchant Solutions Corp',
    published: false, visible_on_site: true, attachments: []
  };
  const [form, setForm] = useState(emptyPost);

  useEffect(() => {
    document.title = 'Content Admin | Merchant Solutions Corp';
    if (token) verifyToken(); else setVerifying(false);
  }, []);

  const verifyToken = async () => {
    try {
      const res = await fetch(`${API}/api/blog/verify?token=${token}`);
      if (res.ok) { fetchPosts(); } else { setToken(''); sessionStorage.removeItem('blog_token'); }
    } catch { setToken(''); sessionStorage.removeItem('blog_token'); }
    setVerifying(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(''); setLoginLoading(true);
    try {
      const res = await fetch(`${API}/api/blog/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: email, password }) });
      if (res.ok) { const data = await res.json(); setToken(data.token); sessionStorage.setItem('blog_token', data.token); fetchPosts(); }
      else setLoginError('Invalid email or password.');
    } catch { setLoginError('Connection error. Please try again.'); }
    setLoginLoading(false);
  };

  const handleLogout = () => { setToken(''); sessionStorage.removeItem('blog_token'); setPosts([]); };

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API}/api/blog?published_only=false`);
      setPosts(await res.json());
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(`${API}/api/upload`, { method: 'POST', body: formData });
      if (res.ok) {
        const data = await res.json();
        const attachment = {
          id: data.id, filename: data.original_filename,
          path: data.storage_path, content_type: data.content_type,
          size: data.size, download_url: `${API}/api/files/${data.storage_path}`
        };
        setForm(prev => ({ ...prev, attachments: [...prev.attachments, attachment] }));
      }
    } catch (err) { console.error('Upload failed:', err); }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeAttachment = (idx) => {
    setForm(prev => ({ ...prev, attachments: prev.attachments.filter((_, i) => i !== idx) }));
  };

  const handleSave = async () => {
    const payload = {
      ...form,
      hashtags: typeof form.hashtags === 'string' ? form.hashtags.split(',').map(t => t.trim()).filter(Boolean) : form.hashtags,
      keywords: typeof form.keywords === 'string' ? form.keywords.split(',').map(t => t.trim()).filter(Boolean) : form.keywords,
      images: form.cover_image ? [form.cover_image] : []
    };
    try {
      if (editing) {
        await fetch(`${API}/api/blog/${editing}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      } else {
        await fetch(`${API}/api/blog`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      }
      setEditing(null); setForm(emptyPost); fetchPosts();
    } catch (err) { console.error(err); }
  };

  const handleEdit = (post) => {
    setEditing(post.id);
    setForm({
      ...post,
      hashtags: Array.isArray(post.hashtags) ? post.hashtags.join(', ') : post.hashtags || '',
      keywords: Array.isArray(post.keywords) ? post.keywords.join(', ') : post.keywords || '',
      attachments: post.attachments || []
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this post?')) return;
    await fetch(`${API}/api/blog/${id}`, { method: 'DELETE' });
    fetchPosts();
  };

  const togglePublish = async (post) => {
    await fetch(`${API}/api/blog/${post.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ published: !post.published }) });
    fetchPosts();
  };

  const toggleVisibility = async (post) => {
    await fetch(`${API}/api/blog/${post.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visible_on_site: !post.visible_on_site }) });
    fetchPosts();
  };

  const shareUrl = (post) => `${window.location.origin}/resources/blog/${post.slug}`;
  const shareOnTwitter = (post) => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl(post))}`, '_blank');
  const shareOnFacebook = (post) => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl(post))}`, '_blank');
  const shareOnLinkedIn = (post) => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl(post))}`, '_blank');

  const filteredPosts = activeTab === 'all' ? posts : posts.filter(p => p.content_type === activeTab);
  const typeLabel = (t) => CONTENT_TYPES.find(c => c.value === t)?.label || t;
  const typeColor = (t) => t === 'blog' ? 'bg-purple-100 text-purple-700' : t === 'article' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700';

  if (verifying) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Verifying session...</p></div>;

  if (!token) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4"><Lock className="h-8 w-8 text-purple-600" /></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2" data-testid="blog-login-h1">Content Admin</h1>
            <p className="text-gray-500">Sign in with your marketing credentials.</p>
          </div>
          <Card className="border border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="marketing@merchantsolutionscorp.com" required data-testid="blog-email-input" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Enter password" required data-testid="blog-password-input" />
                </div>
                {loginError && <p className="text-red-500 text-sm" data-testid="blog-login-error">{loginError}</p>}
                <Button type="submit" disabled={loginLoading} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg" data-testid="blog-login-btn">{loginLoading ? 'Signing in...' : 'Sign In'}</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <Link to="/resources/blog" className="text-purple-200 hover:text-white text-sm flex items-center gap-1 mb-2"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
            <h1 className="text-3xl font-bold" data-testid="blog-admin-h1">Content Admin</h1>
            <p className="text-purple-200 mt-1">Manage blogs, articles, and POS guides</p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => { setEditing(null); setForm(emptyPost); }} className="bg-white text-purple-700 hover:bg-purple-50" data-testid="new-post-btn"><Plus className="h-4 w-4 mr-2" /> New Content</Button>
            <Button onClick={handleLogout} variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="blog-logout-btn"><LogOut className="h-4 w-4 mr-2" /> Logout</Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Editor */}
        <Card className="mb-8 border-2 border-purple-200" data-testid="post-editor">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{editing ? 'Edit Content' : 'New Content'}</h2>

            {/* Content Type */}
            <div className="flex gap-2 mb-6">
              {CONTENT_TYPES.map(ct => (
                <button key={ct.value} onClick={() => setForm({ ...form, content_type: ct.value })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${form.content_type === ct.value ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  data-testid={`type-${ct.value}`}>{ct.label}</button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Post title" data-testid="post-title-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                <input type="text" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Author name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1"><Tag className="h-3 w-3 inline mr-1" />Topic</label>
                <input type="text" value={form.topic} onChange={e => setForm({ ...form, topic: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="e.g. Payment Processing" data-testid="post-topic-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="e.g. Restaurant POS Setup" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1"><Hash className="h-3 w-3 inline mr-1" />Hashtags (comma separated)</label>
                <input type="text" value={form.hashtags} onChange={e => setForm({ ...form, hashtags: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="payments, POS, restaurant" data-testid="post-hashtags-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
                <input type="text" value={form.keywords} onChange={e => setForm({ ...form, keywords: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="restaurant payment processing, clover POS" data-testid="post-keywords-input" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1"><Image className="h-3 w-3 inline mr-1" />Cover Image URL</label>
              <input type="text" value={form.cover_image} onChange={e => setForm({ ...form, cover_image: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="https://example.com/image.jpg" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
              <textarea rows={2} value={form.excerpt} onChange={e => setForm({ ...form, excerpt: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="Brief summary for listing pages..." />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea rows={10} value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm" placeholder="Write your content here..." data-testid="post-content-input" />
            </div>

            {/* File Upload */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2"><Paperclip className="h-3 w-3 inline mr-1" />Attachments (PDF, documents, images)</label>
              <div className="flex items-center gap-3 mb-3">
                <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp" onChange={handleFileUpload} className="hidden" data-testid="file-upload-input" />
                <Button variant="outline" onClick={() => fileInputRef.current?.click()} disabled={uploading} className="text-sm" data-testid="upload-btn">
                  <Upload className="h-4 w-4 mr-2" /> {uploading ? 'Uploading...' : 'Upload File'}
                </Button>
              </div>
              {form.attachments?.length > 0 && (
                <div className="space-y-2">
                  {form.attachments.map((att, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white px-3 py-2 rounded border border-gray-200">
                      <FileText className="h-4 w-4 text-purple-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 flex-1 truncate">{att.filename}</span>
                      <span className="text-xs text-gray-400">{att.content_type}</span>
                      <button onClick={() => removeAttachment(i)} className="text-red-400 hover:text-red-600"><X className="h-4 w-4" /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Toggles */}
            <div className="flex items-center gap-8 mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className={`relative w-11 h-6 rounded-full transition-colors ${form.published ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setForm({ ...form, published: !form.published })}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${form.published ? 'translate-x-5.5 left-[22px]' : 'left-0.5'}`} />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Published</span>
                  <p className="text-xs text-gray-400">Visible to Google & direct links</p>
                </div>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className={`relative w-11 h-6 rounded-full transition-colors ${form.visible_on_site ? 'bg-purple-500' : 'bg-gray-300'}`} onClick={() => setForm({ ...form, visible_on_site: !form.visible_on_site })}>
                  <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${form.visible_on_site ? 'translate-x-5.5 left-[22px]' : 'left-0.5'}`} />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Show on Website</span>
                  <p className="text-xs text-gray-400">Display in blog/article listing</p>
                </div>
              </label>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1" />
              {editing && <Button variant="outline" onClick={() => { setEditing(null); setForm(emptyPost); }} data-testid="cancel-edit-btn"><X className="h-4 w-4 mr-1" /> Cancel</Button>}
              <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700 text-white" data-testid="save-post-btn"><Save className="h-4 w-4 mr-2" /> {editing ? 'Update' : 'Create'}</Button>
            </div>
          </CardContent>
        </Card>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-4">
          {[{ value: 'all', label: 'All' }, ...CONTENT_TYPES].map(tab => (
            <button key={tab.value} onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.value ? 'bg-purple-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}>
              {tab.label} {tab.value === 'all' ? `(${posts.length})` : `(${posts.filter(p => p.content_type === tab.value).length})`}
            </button>
          ))}
        </div>

        {/* Posts List */}
        {loading ? <p className="text-gray-500">Loading...</p> : filteredPosts.length === 0 ? <p className="text-gray-500">No content found.</p> : (
          <div className="space-y-3">
            {filteredPosts.map(post => (
              <Card key={post.id} className="border border-gray-200" data-testid={`post-card-${post.id}`}>
                <CardContent className="p-4 flex items-center gap-4">
                  {post.cover_image && <img src={post.cover_image} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColor(post.content_type)}`}>{typeLabel(post.content_type)}</span>
                      <h3 className="font-semibold text-gray-900 truncate">{post.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{post.published ? 'Published' : 'Draft'}</span>
                      {post.published && !post.visible_on_site && <span className="text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Hidden from site</span>}
                      {post.attachments?.length > 0 && <span className="text-xs text-gray-400 flex items-center gap-1"><Paperclip className="h-3 w-3" />{post.attachments.length}</span>}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{post.topic} {post.subject && `· ${post.subject}`}</p>
                    {post.hashtags?.length > 0 && (
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {post.hashtags.slice(0, 4).map((h, i) => <span key={i} className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">#{h}</span>)}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {post.published && (
                      <div className="flex gap-1 mr-2">
                        <button onClick={() => shareOnTwitter(post)} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-500" title="Share on X">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </button>
                        <button onClick={() => shareOnFacebook(post)} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-600" title="Share on Facebook">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </button>
                        <button onClick={() => shareOnLinkedIn(post)} className="p-1.5 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-700" title="Share on LinkedIn">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </button>
                      </div>
                    )}
                    <Button size="sm" variant="ghost" onClick={() => toggleVisibility(post)} title={post.visible_on_site ? 'Hide from website' : 'Show on website'} className={post.visible_on_site ? 'text-purple-600' : 'text-gray-400'}>
                      {post.visible_on_site ? <Globe className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => togglePublish(post)} title={post.published ? 'Unpublish' : 'Publish'}>
                      {post.published ? <Eye className="h-4 w-4 text-green-600" /> : <Eye className="h-4 w-4 text-gray-400" />}
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => handleEdit(post)}><Edit2 className="h-4 w-4" /></Button>
                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700" onClick={() => handleDelete(post.id)}><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
