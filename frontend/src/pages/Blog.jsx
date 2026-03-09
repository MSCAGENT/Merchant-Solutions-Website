import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Hash, Tag, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const API = process.env.REACT_APP_BACKEND_URL;

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Blog | Merchant Solutions Corp';
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await fetch(`${API}/api/blog?published_only=true&visible_only=true`);
      const data = await res.json();
      setPosts(data);
    } catch (err) { console.error(err); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Blog | Payment Processing Tips & Industry Insights | Merchant Solutions Corp</title>
        <meta name="description" content="Read the latest insights on payment processing, POS systems, merchant services, and business growth from Merchant Solutions Corp. Expert tips and industry news." />
        <meta name="keywords" content="payment processing blog, merchant services tips, POS system guides, business payment insights, credit card processing news, fintech blog" />
        <link rel="canonical" href="/resources/blog" />
      </Helmet>
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="blog-h1">Blog</h1>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto">
            Insights on payment processing, POS systems, and growing your business.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading posts...</p>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg mb-4">No blog posts published yet.</p>
              <p className="text-gray-400">Check back soon for insights on payment processing and POS systems.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <Link key={post.id} to={`/resources/blog/${post.slug || post.id}`} data-testid={`blog-card-${post.id}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden group">
                    {post.cover_image && (
                      <div className="h-48 overflow-hidden">
                        <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                    )}
                    <CardContent className="p-6">
                      {post.topic && (
                        <span className="text-xs uppercase tracking-wider text-purple-600 font-semibold">{post.topic}</span>
                      )}
                      <h2 className="text-xl font-bold text-gray-900 mt-1 mb-2 group-hover:text-purple-700 transition-colors">{post.title}</h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '')}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><User className="h-3 w-3" />{post.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.created_at).toLocaleDateString()}</span>
                      </div>
                      {post.hashtags?.length > 0 && (
                        <div className="flex gap-1 mt-3 flex-wrap">
                          {post.hashtags.slice(0, 3).map((h, i) => (
                            <span key={i} className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">#{h}</span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`${API}/api/blog/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
          document.title = `${data.meta_title || data.title} | Merchant Solutions Corp`;
        }
      } catch (err) { console.error(err); }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  const shareUrl = window.location.href;
  const isHtml = (str) => /<[a-z][\s\S]*>/i.test(str);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>;
  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-gray-500 text-lg mb-4">Post not found.</p>
      <Link to="/resources/blog"><Button variant="outline">Back to Blog</Button></Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.meta_title || post.title} | Merchant Solutions Corp</title>
        <meta name="description" content={post.meta_description || post.excerpt || ''} />
        {post.keywords?.length > 0 && <meta name="keywords" content={post.keywords.join(', ')} />}
        <link rel="canonical" href={`/resources/blog/${post.slug}`} />
        <meta property="og:title" content={post.meta_title || post.title} />
        <meta property="og:description" content={post.meta_description || post.excerpt || ''} />
        <meta property="og:type" content="article" />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        {post.schema_markup && (
          <script type="application/ld+json">{post.schema_markup}</script>
        )}
      </Helmet>
      {post.cover_image && (
        <div className="h-[400px] w-full overflow-hidden relative">
          <img src={post.cover_image} alt={post.cover_image_alt || post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      )}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="blog-post-content">
        <Link to="/resources/blog" className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-1 mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        {post.topic && <span className="text-sm uppercase tracking-wider text-purple-600 font-semibold">{post.topic}</span>}
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <span className="flex items-center gap-1"><User className="h-4 w-4" />{post.author}</span>
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        {isHtml(post.content) ? (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        ) : (
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        )}
        {post.hashtags?.length > 0 && (
          <div className="flex gap-2 mt-8 pt-8 border-t border-gray-100 flex-wrap">
            {post.hashtags.map((h, i) => (
              <span key={i} className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full">#{h}</span>
            ))}
          </div>
        )}
        {post.keywords?.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {post.keywords.map((k, i) => (
              <span key={i} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{k}</span>
            ))}
          </div>
        )}
        {post.attachments?.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-700 mb-3">Attached Documents:</p>
            <div className="space-y-2">
              {post.attachments.map((att, i) => (
                <a key={i} href={att.download_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg hover:bg-purple-50 transition-colors border border-gray-200">
                  <FileText className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{att.filename}</span>
                  <span className="text-xs text-gray-400 ml-auto">{att.content_type}</span>
                </a>
              ))}
            </div>
          </div>
        )}
        {/* Social Share */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Share this article:</p>
          <div className="flex gap-3">
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
               target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Post on X
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
               target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
              Facebook
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
               target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-800 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export { BlogList, BlogPost };
