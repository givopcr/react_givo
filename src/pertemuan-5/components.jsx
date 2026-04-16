import { useMemo, useState } from "react"

export function Navbar() {
  return (
    <header className="nav-shell">
      <div>
        <p className="eyebrow">Pertemuan 5</p>
        <h1 className="brand">AnyGravity</h1>
      </div>
      <nav className="nav-links">
        <a href="#layanan">Layanan</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#faq">FAQ</a>
      </nav>
    </header>
  )
}

export function Hero({ highlights }) {
  return (
    <section className="hero card">
      <div className="hero-copy">
        <span className="pill">React Multi Component Page</span>
        <h2>Halaman profesional untuk presentasi AnyGravity.</h2>
        <p>
          Dibuat sebagai project React sederhana namun tetap modern, rapi, dan
          siap dikembangkan untuk kebutuhan pembelajaran maupun portfolio.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#portfolio">
            Lihat Showcase
          </a>
          <a className="btn btn-secondary" href="#kontak">
            Hubungi Tim
          </a>
        </div>
      </div>
      <div className="hero-panel">
        <h3>Keunggulan Halaman</h3>
        <ul className="bullet-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function MetricGrid({ items }) {
  return (
    <section className="metric-grid">
      {items.map((item) => (
        <article className="metric-card card" key={item.label}>
          <strong>{item.value}</strong>
          <h3>{item.label}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </section>
  )
}

export function ServiceSection({ items }) {
  return (
    <section className="section-block" id="layanan">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h2>Layanan inti yang dibungkus dengan komponen terpisah</h2>
      </div>
      <div className="service-grid">
        {items.map((item) => (
          <article className="service-card card" key={item.title}>
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function WorkflowSection({ items }) {
  return (
    <section className="section-block workflow-shell">
      <div className="section-heading">
        <p className="eyebrow">Workflow</p>
        <h2>Alur kerja ringkas untuk build yang lebih terarah</h2>
      </div>
      <div className="workflow-grid">
        {items.map((item) => (
          <article className="workflow-card card" key={item.step}>
            <span>{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export function PortfolioSection({ items }) {
  const [activeTab, setActiveTab] = useState(items[0]?.id ?? "")

  const activeItem = useMemo(
    () => items.find((item) => item.id === activeTab) ?? items[0],
    [activeTab, items]
  )

  return (
    <section className="section-block" id="portfolio">
      <div className="section-heading">
        <p className="eyebrow">Showcase</p>
        <h2>Contoh area konten interaktif dengan tabs</h2>
      </div>
      <div className="portfolio card">
        <div className="tab-row">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              className={item.id === activeTab ? "tab active" : "tab"}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="portfolio-content">
          <div>
            <p className="eyebrow">Selected Project</p>
            <h3>{activeItem.title}</h3>
            <p>{activeItem.summary}</p>
          </div>
          <div className="tag-group">
            {activeItem.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function TestimonialSection({ items }) {
  return (
    <section className="section-block dual-grid">
      {items.map((item) => (
        <article className="testimonial card" key={item.name}>
          <p className="quote">"{item.quote}"</p>
          <h3>{item.name}</h3>
          <span>{item.role}</span>
        </article>
      ))}
    </section>
  )
}

export function FaqSection({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-block" id="faq">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Pertanyaan umum tentang halaman ini</h2>
      </div>
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = index === openIndex

          return (
            <article className="faq-item card" key={item.question}>
              <button
                type="button"
                className="faq-trigger"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{item.question}</span>
                <span>{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen ? <p>{item.answer}</p> : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section className="section-block contact card" id="kontak">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Siap dikembangkan menjadi mini company profile AnyGravity</h2>
        <p>
          Anda bisa menambahkan form, API, atau routing lanjutan dari fondasi
          halaman ini tanpa perlu mengubah struktur utama.
        </p>
      </div>
      <div className="contact-box">
        <p>Email</p>
        <strong>hello@anygravity.dev</strong>
        <p>Location</p>
        <strong>Jakarta, Indonesia</strong>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer-note">
      <p>AnyGravity x Pertemuan 5 • React Components • Vite Multi Page</p>
    </footer>
  )
}
