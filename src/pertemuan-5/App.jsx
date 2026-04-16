import {
  ContactSection,
  FaqSection,
  Footer,
  Hero,
  MetricGrid,
  Navbar,
  PortfolioSection,
  ServiceSection,
  TestimonialSection,
  WorkflowSection,
} from "./components"
import {
  faqs,
  highlights,
  metrics,
  portfolioTabs,
  services,
  testimonials,
  workflows,
} from "./data"

export default function App() {
  return (
    <div className="page-shell">
      <div className="page-noise" />
      <main className="page-content">
        <Navbar />
        <Hero highlights={highlights} />
        <MetricGrid items={metrics} />
        <ServiceSection items={services} />
        <WorkflowSection items={workflows} />
        <PortfolioSection items={portfolioTabs} />
        <TestimonialSection items={testimonials} />
        <FaqSection items={faqs} />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
