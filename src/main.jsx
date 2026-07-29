import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Menu, ShieldCheck } from 'lucide-react'
import './styles.css'

const capabilities = [
  ['01', 'Programmer', 'Building fast, clean, and scalable digital systems.'],
  ['02', 'OSINT Researcher', 'Uncovering patterns, verifying facts, and turning data into clarity.'],
  ['03', 'Prison Guard', 'Discipline, firmness, and complete awareness in every security detail.'],
]

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top"><span>TS</span> TEGAR SUKMAWAN</a>
        <div className="nav-links">
          <a href="#profile">Profile</a><a href="#expertise">Expertise</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        <button className="menu" aria-label="Open menu"><Menu size={22}/></button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-noise" />
        <p className="eyebrow hero-tag"><span /> DIGITAL SECURITY · INDONESIA</p>
        <div className="hero-image" aria-label="Portrait of Tegar Sukmawan" />
        <div className="hero-content wrap">
          <p className="hero-intro">Programmer, OSINT researcher, and guardian who believes security begins with precision.</p>
          <h1><span>TEGAR</span><br />SUKMAWAN</h1>
          <div className="hero-bottom">
            <p>One step ahead.<br />One threat behind.</p>
            <a href="#profile" className="round-link" aria-label="Scroll to profile"><ArrowDownRight size={25}/></a>
          </div>
        </div>
        <div className="hero-index">01 — 03</div>
      </section>

      <section id="profile" className="statement wrap">
        <p className="eyebrow"><span /> ABOUT ME</p>
        <div className="statement-grid">
          <h2>Combining<br /><em>firmness</em> and<br />technology.</h2>
          <div className="statement-copy">
            <p>I work at the intersection of technology, open-source intelligence, and security. My approach is simple: understand risks, master information, and move with precision.</p>
            <a href="#expertise" className="text-link">Explore expertise <ArrowDownRight size={18}/></a>
          </div>
        </div>
      </section>

      <section id="expertise" className="capabilities">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow light"><span /> CORE EXPERTISE</p><p>03 fields, one mission:<br />creating a sense of security.</p></div>
          <div className="cap-list">
            {capabilities.map(([number, title, description]) => <article className="cap" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="cap-arrow" size={22}/>
            </article>)}
          </div>
        </div>
      </section>

      <section id="contact" className="contact wrap">
        <div><p className="eyebrow"><span /> CONNECT</p><h2>Have something<br />that needs <em>securing?</em></h2></div>
        <a className="contact-button" href="mailto:hello@tegarsukmawan.id">Start a conversation <ArrowUpRight size={22}/></a>
      </section>

      <footer className="footer wrap"><span>© 2026 Tegar Sukmawan</span><span><ShieldCheck size={15}/> Built with purpose</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
