import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { BLOG_ARTICLES_DATA, type BlogArticle } from '../../data/blogArticles';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Mumbai Property Market',
    'Home Buying Guides',
    'Commercial Real Estate',
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? BLOG_ARTICLES_DATA
      : BLOG_ARTICLES_DATA.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title="Real Estate Insights & Mumbai Market Research | Balaji Enterprises"
        description="Read due diligence guides, infrastructure updates, and commercial leasing analyses curated by Balaji Enterprises property advisory desk."
        canonicalPath="/insights"
      />

      <Breadcrumbs items={[{ label: 'Insights' }]} />

      {/* Header Banner */}
      <section className="py-6 sm:py-16 bg-theme-surface-alt border-b border-theme-border px-3 sm:px-6">
        <div className="max-w-7xl mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-theme-surface border border-theme-accent/30 text-[10px] sm:text-xs font-semibold text-theme-accent uppercase tracking-wider mb-2.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-theme-accent" />
            <span>Research & Advisory Publication</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-theme mb-2 sm:mb-4 leading-tight">
            Mumbai Real Estate Insights
          </h1>

          <p className="text-xs sm:text-sm text-theme-muted leading-relaxed font-sans px-2">
            In-depth perspectives on legal due diligence, commercial lease structuring, coastal road infrastructure impacts, and high-value property acquisitions.
          </p>

          {/* Sample Content Disclosure */}
          <div className="mt-3 sm:mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] sm:text-[11px] text-amber-700 dark:text-amber-300">
            <AlertCircle className="w-3 h-3 shrink-0" />
            <span>Educational demonstration articles for platform preview.</span>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-5 sm:pt-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-theme-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-theme-primary text-white font-semibold'
                  : 'bg-theme-surface text-theme-muted border border-theme-border hover:text-theme'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article: BlogArticle) => (
            <article
              key={article.id}
              className="luxury-card group rounded-3xl overflow-hidden bg-theme-surface border border-theme-border flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-theme-surface-alt">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-primary/90 text-white backdrop-blur-md">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-theme-muted mb-2">
                    <Clock className="w-3.5 h-3.5 text-theme-accent" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h2 className="text-lg font-bold font-display text-theme group-hover:text-theme-accent transition-colors line-clamp-2">
                    <Link to={`/insights/${article.slug}`}>{article.title}</Link>
                  </h2>

                  <p className="text-xs text-theme-muted line-clamp-3 mt-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-theme-border flex items-center justify-between">
                  <span className="text-[11px] text-theme-muted font-medium">
                    By {article.author.split(' ')[0]}
                  </span>
                  <Link
                    to={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-theme-accent hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
