export function ServiceSection() {
  const items = [
    {
      title: 'Buy a home',
      image: '/images/service-1.png',
      text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
    },
    {
      title: 'Rent a home',
      image: '/images/service-2.png',
      text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
    },
    {
      title: 'Sell a home',
      image: '/images/service-3.png',
      text: 'over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.',
    },
  ]

  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section-subtitle">Our Services</p>
        <h2 className="h2 section-title">Our Main Focus</h2>

        <ul className="service-list">
          {items.map((it) => (
            <li key={it.title}>
              <div className="service-card">
                <div className="card-icon">
                  <img src={it.image} alt="Service icon" loading="lazy" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">{it.title}</a>
                </h3>

                <p className="card-text">{it.text}</p>

                <a href="#" className="card-link">
                  <span>Find A Home</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

