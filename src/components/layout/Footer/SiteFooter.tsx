export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/images/logo-light.png" alt="Homeverse logo" />
            </a>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.
            </p>
            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <span aria-hidden="true">📍</span>
                  <address>Brooklyn, New York, United States</address>
                </a>
              </li>
              <li>
                <a href="tel:+0123456789" className="contact-link">
                  <span aria-hidden="true">☎</span>
                  <span>+0123-456789</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <span aria-hidden="true">✉</span>
                  <span>contact@homeverse.com</span>
                </a>
              </li>
            </ul>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <span aria-hidden="true">f</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <span aria-hidden="true">t</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <span aria-hidden="true">in</span>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <span aria-hidden="true">▶</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>
              {['About', 'Blog', 'All Products', 'Locations Map', 'FAQ', 'Contact us'].map((t) => (
                <li key={t}>
                  <a href="#" className="footer-link">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>
              {['Order tracking', 'Wish List', 'Login', 'My account', 'Terms & Conditions', 'Promotional Offers'].map(
                (t) => (
                  <li key={t}>
                    <a href="#" className="footer-link">
                      {t}
                    </a>
                  </li>
                ),
              )}
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>
              {['Login', 'My account', 'Wish List', 'Order tracking', 'FAQ', 'Contact us'].map((t) => (
                <li key={t}>
                  <a href="#" className="footer-link">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

