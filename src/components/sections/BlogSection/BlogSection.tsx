export function BlogSection() {
  const items = [
    {
      image: '/images/blog-1.png',
      title: 'The Most Inspiring Interior Design Of 2021',
      time: 'Apr 27, 2022',
      tag: 'Interior',
    },
    {
      image: '/images/blog-2.jpg',
      title: 'Recent Commercial Real Estate Transactions',
      time: 'Apr 27, 2022',
      tag: 'Estate',
    },
    {
      image: '/images/blog-3.jpg',
      title: 'Renovating a Living Room? Experts Share Their Secrets',
      time: 'Apr 27, 2022',
      tag: 'Room',
    },
  ]

  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>
        <h2 className="h2 section-title">Leatest News Feeds</h2>

        <ul className="blog-list has-scrollbar">
          {items.map((it) => (
            <li key={it.title}>
              <div className="blog-card">
                <figure className="card-banner">
                  <img src={it.image} alt={it.title} className="w-100" loading="lazy" />
                </figure>

                <div className="blog-content">
                  <div className="blog-content-top">
                    <ul className="card-meta-list">
                      <li>
                        <a href="#" className="card-meta-link">
                          <span aria-hidden="true">👤</span>
                          <span>by: Admin</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="card-meta-link">
                          <span aria-hidden="true">🏷️</span>
                          <span>{it.tag}</span>
                        </a>
                      </li>
                    </ul>

                    <h3 className="h3 blog-title">
                      <a href="#">{it.title}</a>
                    </h3>
                  </div>

                  <div className="blog-content-bottom">
                    <div className="publish-date">
                      <span aria-hidden="true">📅</span>
                      <time dateTime="2022-27-04">{it.time}</time>
                    </div>
                    <a href="#" className="read-more-btn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

