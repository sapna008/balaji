import React, { useEffect, useState } from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import {
  Clock,
  Calendar,
  User,
  ArrowRight,
  Share2,
  Check,
  BookOpen,
} from 'lucide-react';
import { BLOG_ARTICLES_DATA, type BlogArticle } from '../../data/blogArticles';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SEO } from '../../components/common/SEO';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openEnquiry } = useOutletContext<{ openEnquiry: () => void }>();

  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = BLOG_ARTICLES_DATA.find((a) => a.slug === slug);
    setArticle(found || null);
  }, [slug]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <h2 className="text-2xl font-bold font-display text-theme mb-2">
          Article Not Found
        </h2>
        <p className="text-xs text-theme-muted mb-6">
          The requested research publication could not be located.
        </p>
        <Link
          to="/insights"
          className="px-6 py-2.5 rounded-full bg-theme-primary text-white text-xs font-semibold"
        >
          Return to Insights
        </Link>
      </div>
    );
  }

  const relatedArticles = BLOG_ARTICLES_DATA.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-theme-bg text-theme transition-colors min-h-screen">
      <SEO
        title={article.title}
        description={article.excerpt}
        canonicalPath={`/insights/${article.slug}`}
      />

      <Breadcrumbs
        items={[
          { label: 'Insights', path: '/insights' },
          { label: article.title },
        ]}
      />

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-10 space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase bg-theme-primary text-white tracking-wide">
            {article.category}
          </span>
          <span className="px-2.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30">
            Educational Sample Article
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-display text-theme leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-theme-muted leading-relaxed font-sans">
          {article.subtitle}
        </p>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-theme-border text-xs text-theme-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-theme-accent" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-theme-accent" />
              <span>{article.publishedDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-theme-accent" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-theme-border hover:border-theme-accent transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-500" />
                <span className="text-emerald-500">Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3 h-3" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden border border-theme-border shadow-elevated bg-theme-surface-alt">
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body with Table of Contents */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents Sticky Column */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border shadow-subtle sticky top-28 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-theme-accent flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Table of Contents</span>
              </h3>
              <nav className="space-y-2 text-xs">
                {article.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-theme-muted hover:text-theme-accent transition-colors py-1 pl-2 border-l-2 border-transparent hover:border-theme-accent"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-theme-border">
                <button
                  onClick={openEnquiry}
                  className="w-full py-2.5 rounded-xl bg-theme-primary text-white text-xs font-semibold hover:bg-theme-primary-hover transition-colors shadow-sm"
                >
                  Consult an Advisor
                </button>
              </div>
            </div>
          </aside>

          {/* Article Main Text Content */}
          <main className="lg:col-span-8 space-y-10">
            {article.content.map((sec) => (
              <section key={sec.sectionId} id={sec.sectionId} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-theme border-b border-theme-border pb-2">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-theme leading-relaxed">
                    {p}
                  </p>
                ))}

                {sec.callout && (
                  <blockquote className="p-4 sm:p-5 rounded-2xl bg-theme-surface-alt border-l-4 border-theme-accent text-xs sm:text-sm text-theme italic leading-relaxed my-4">
                    "{sec.callout}"
                  </blockquote>
                )}
              </section>
            ))}

            {/* Author note */}
            <div className="p-6 rounded-2xl bg-theme-surface border border-theme-border mt-12 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-theme-primary text-theme-accent flex items-center justify-center font-bold font-display text-base shrink-0">
                BE
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-theme">
                  {article.author}
                </h4>
                <p className="text-xs text-theme-muted leading-relaxed">
                  The research arm of Balaji Enterprises specializes in micro-market intelligence, registry benchmarks, and transactional legal structuring for Mumbai real estate.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Related Articles Carousel/Grid */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-theme-surface-alt border-t border-theme-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold font-display text-theme mb-6">
              More Research & Due Diligence Analyses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map((rel) => (
                <article
                  key={rel.id}
                  className="p-5 rounded-2xl bg-theme-surface border border-theme-border space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-theme-accent uppercase tracking-wider">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold font-display text-theme hover:text-theme-accent mt-1 line-clamp-2">
                      <Link to={`/insights/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-theme-muted line-clamp-2 mt-1">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-theme-border flex items-center justify-between text-xs">
                    <span className="text-theme-muted text-[11px]">{rel.readTime}</span>
                    <Link
                      to={`/insights/${rel.slug}`}
                      className="font-semibold text-theme-accent hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
