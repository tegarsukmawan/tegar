import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Menu, ShieldCheck } from 'lucide-react'
import './styles.css'

const capabilities = [
  ['01', 'Programmer', 'Membangun sistem digital yang cepat, rapi, dan siap berkembang.'],
  ['02', 'OSINT Researcher', 'Menemukan pola, memverifikasi fakta, dan mengubah data menjadi kejelasan.'],
  ['03', 'Prison Guard', 'Disiplin, ketegasan, serta kesadaran penuh pada setiap detail keamanan.'],
]

function App() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#top"><span>TS</span> TEGAR SUKMAWAN</a>
        <div className="nav-links">
          <a href="#profil">Profil</a><a href="#keahlian">Keahlian</a><a href="#kontak">Kontak</a>
        </div>
        <a className="nav-cta" href="#kontak">Mari bicara <ArrowUpRight size={15}/></a>
        <button className="menu" aria-label="Buka menu"><Menu size={22}/></button>
      </nav>

      <section id="top" className="hero">
        <div className="hero-noise" />
        <p className="eyebrow hero-tag"><span /> DIGITAL SECURITY · INDONESIA</p>
        <div className="hero-image" aria-label="Portrait of Tegar Sukmawan" />
        <div className="hero-content wrap">
          <p className="hero-intro">Programmer, OSINT researcher, dan penjaga yang percaya bahwa keamanan dimulai dari ketelitian.</p>
          <h1><span>TEGAR</span><br />SUKMAWAN</h1>
          <div className="hero-bottom">
            <p>Satu langkah di depan.<br />Satu ancaman di belakang.</p>
            <a href="#profil" className="round-link" aria-label="Scroll ke profil"><ArrowDownRight size={25}/></a>
          </div>
        </div>
        <div className="hero-index">01 — 03</div>
      </section>

      <section id="profil" className="statement wrap">
        <p className="eyebrow"><span /> TENTANG SAYA</p>
        <div className="statement-grid">
          <h2>Memadukan<br /><em>ketegasan</em> dan<br />teknologi.</h2>
          <div className="statement-copy">
            <p>Saya bekerja di persimpangan antara teknologi, investigasi sumber terbuka, dan keamanan. Pendekatan saya sederhana: pahami risiko, kuasai informasi, lalu bergerak dengan presisi.</p>
            <a href="#keahlian" className="text-link">Jelajahi keahlian <ArrowDownRight size={18}/></a>
          </div>
        </div>
      </section>

      <section id="keahlian" className="capabilities">
        <div className="wrap">
          <div className="section-head"><p className="eyebrow light"><span /> FOKUS KEAHLIAN</p><p>03 bidang, satu misi:<br />menciptakan rasa aman.</p></div>
          <div className="cap-list">
            {capabilities.map(([number, title, description]) => <article className="cap" key={number}>
              <span>{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="cap-arrow" size={22}/>
            </article>)}
          </div>
        </div>
      </section>

      <section id="kontak" className="contact wrap">
        <div><p className="eyebrow"><span /> KONEKSI</p><h2>Punya sesuatu<br />yang perlu <em>diamankan?</em></h2></div>
        <a className="contact-button" href="mailto:hello@tegarsukmawan.id">Mulai percakapan <ArrowUpRight size={22}/></a>
      </section>

      <footer className="footer wrap"><span>© 2026 Tegar Sukmawan</span><span><ShieldCheck size={15}/> Built with purpose</span><a href="#top">Kembali ke atas ↑</a></footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
