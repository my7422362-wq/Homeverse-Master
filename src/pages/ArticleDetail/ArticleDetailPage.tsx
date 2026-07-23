import { useMemo } from 'react'
import { Calendar, Clock, User, ArrowRight, AlertTriangle, BookOpen } from 'lucide-react'
import { getArticleBySlug, getRelatedArticles, type ArticleSection } from '../../data/articles'
import { articles } from '../../data/articles'

const WHATSAPP_NUMBER = '201013556821'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello, I would like to inquire about one of your luxury properties.')
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

export function ArticleDetailPage({ slug }: { slug?: string }) {
  const article = useMemo(() => {
    if (!slug) return undefined
    return getArticleBySlug(slug)
  }, [slug])

  const relatedArticles = useMemo(() => {
    if (!slug) return []
    return getRelatedArticles(slug)
  }, [slug])

  // 404 — Invalid article slug
  if (!article) {
    return (
      <main className="ad-page ad-not-found">
        <div className="ad-container">
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-12 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <AlertTriangle size={28} className="text-[#C89B3C]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Article Not Found</h1>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              The article you're looking for doesn't exist or may have been removed from our library.
            </p>
            <a
              href="/"
              className="pd-btn pd-btn-primary inline-flex items-center gap-2"
            >
              <ArrowRight size={18} />
              Back to Home
            </a>
          </div>
        </div>
      </main>
    )
  }

  const formattedDate = article.publishDate

  return (
    <main className="ad-page">
      {/* ===== LARGE HERO IMAGE ===== */}
      <section className="ad-hero" aria-label="Article hero">
        <div className="ad-hero-media">
          <img src={article.heroImage} alt={article.heroImageAlt} className="ad-hero-img" />
          <div className="ad-hero-overlay" />
          <div className="ad-hero-content">
            <div className="ad-container">
              <div className="ad-hero-badge">{article.category}</div>
              <h1 className="ad-hero-title">{article.title}</h1>
              <p className="ad-hero-subtitle">{article.subtitle}</p>
              <div className="ad-hero-meta">
                <span className="ad-hero-meta-item">
                  <User size={16} />
                  {article.author}
                </span>
                <span className="ad-hero-divider" aria-hidden="true" />
                <span className="ad-hero-meta-item">
                  <Calendar size={16} />
                  {formattedDate}
                </span>
                <span className="ad-hero-divider" aria-hidden="true" />
                <span className="ad-hero-meta-item">
                  <Clock size={16} />
                  {article.readingTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="ad-body" aria-label="Article content">
        <div className="ad-body-content">
          {article.sections.map((section, index) => (
            <ArticleSectionRenderer key={index} section={section} />
          ))}
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="ad-divider" aria-hidden="true" />

      {/* ===== HIGHLIGHT BOX ===== */}
      <section className="ad-highlight" aria-label="Professional real estate tip">
        <div className="ad-highlight-card">
          <div className="ad-highlight-icon">💡</div>
          <div className="ad-highlight-label">Pro Tip</div>
          <p className="ad-highlight-text">
            {article.highlightBox.tip}
          </p>
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="ad-divider" aria-hidden="true" />

      {/* ===== MARKET STATISTICS ===== */}
      <section className="ad-stats" aria-label="Market statistics">
        <div className="ad-stats-grid">
          {article.marketStats.map((stat) => (
            <div key={stat.label} className="ad-stat-card">
              <div className="ad-stat-icon">{stat.icon}</div>
              <div className="ad-stat-value">{stat.value}</div>
              <div className="ad-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== NEIGHBORHOOD HIGHLIGHTS ===== */}
      <section className="ad-neighborhoods" aria-label="Neighborhood highlights">
        <div className="ad-neighborhoods-header">
          <h2 className="ad-neighborhoods-title">Neighborhood Highlights</h2>
          <p className="ad-neighborhoods-subtitle">
            Explore the most prestigious locations featured in this article.
          </p>
        </div>
        <div className="ad-neighborhoods-grid">
          {article.neighborhoodHighlights.map((nh) => (
            <div key={nh.name} className="ad-neighborhood-card">
              <div className="ad-neighborhood-name">{nh.name}</div>
              <div className="ad-neighborhood-desc">{nh.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SECTION DIVIDER ===== */}
      <div className="ad-divider" aria-hidden="true" />

      {/* ===== RELATED ARTICLES ===== */}
      {relatedArticles.length > 0 && (
        <section className="ad-related" aria-label="Related articles">
          <div className="ad-related-header">
            <h2 className="ad-related-title">Related Articles</h2>
            <p className="ad-related-subtitle">
              Continue reading more insights from Homeverse.
            </p>
          </div>
          <div className="ad-related-grid">
            {relatedArticles.map((related) => (
              <a
                key={related.slug}
                href={`/articles/${related.slug}`}
                className="ad-related-card"
              >
                <div className="ad-related-media">
                  <img
                    src={related.heroImage}
                    alt={related.heroImageAlt}
                    loading="lazy"
                  />
                </div>
                <div className="ad-related-body">
                  <div className="ad-related-category">{related.category}</div>
                  <h3 className="ad-related-card-title">{related.title}</h3>
                  <div className="ad-related-meta">
                    <span>{related.publishDate}</span>
                    <span>·</span>
                    <span>{related.readingTime}</span>
                  </div>
                </div>
              </a>
            ))}
            {/* Show third article as fallback if not already in related */}
            {relatedArticles.length < 3 && (
              <>
                {articles
                  .filter((a) => a.slug !== article.slug && !relatedArticles.find((r) => r.slug === a.slug))
                  .slice(0, 3 - relatedArticles.length)
                  .map((extra) => (
                    <a
                      key={extra.slug}
                      href={`/articles/${extra.slug}`}
                      className="ad-related-card"
                    >
                      <div className="ad-related-media">
                        <img
                          src={extra.heroImage}
                          alt={extra.heroImageAlt}
                          loading="lazy"
                        />
                      </div>
                      <div className="ad-related-body">
                        <div className="ad-related-category">{extra.category}</div>
                        <h3 className="ad-related-card-title">{extra.title}</h3>
                        <div className="ad-related-meta">
                          <span>{extra.publishDate}</span>
                          <span>·</span>
                          <span>{extra.readingTime}</span>
                        </div>
                      </div>
                    </a>
                  ))}
              </>
            )}
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className="ad-cta" aria-label="Ready to find your next luxury property">
        <div className="ad-cta-card">
          <h2 className="ad-cta-title">Ready to Find Your Next Luxury Property?</h2>
          <p className="ad-cta-text">
            Our experienced advisors are ready to help you discover the finest luxury homes
            across New Cairo and Sheikh Zayed.
          </p>
          <div className="ad-cta-actions">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ad-cta-btn ad-cta-btn-primary"
            >
              <BookOpen size={18} />
              Book Private Tour
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ad-cta-btn ad-cta-btn-secondary"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

/**
 * Renders individual article sections (paragraph, heading, image, list)
 */
function ArticleSectionRenderer({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case 'heading':
      return (
        <h2 className="ad-body-heading">{section.content}</h2>
      )

    case 'paragraph':
      return (
        <p className="ad-body-paragraph">{section.content}</p>
      )

    case 'image':
      return (
        <div className="ad-body-image">
          <img
            src={section.imageSrc}
            alt={section.imageAlt || ''}
            loading="lazy"
          />
        </div>
      )

    case 'list':
      return (
        <div className="ad-body-list">
          {section.content && (
            <p className="ad-body-list-intro">{section.content}</p>
          )}
          {section.items?.map((item, i) => (
            <div key={i} className="ad-body-list-item">{item}</div>
          ))}
        </div>
      )

    default:
      return null
  }
}

