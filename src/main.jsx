import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  ArrowDownRight, ArrowUpRight, Menu, ShieldCheck, Sparkles, X, 
  Terminal, Cpu, Eye, Lock, Layers, Sun, Briefcase, Award, CheckCircle2, 
  Zap, Activity, Shield, Image as ImageIcon
} from 'lucide-react'
import './styles.css'
import tegarsukmawanImg from './assets/tegarsukmawan.jpeg'
import tegarsukmawanParallaxImg from './assets/tegarsukmawan_parallax.jpg'

const capabilities = [
  ['01', 'Programmer', 'Building fast, clean, and scalable digital systems.'],
  ['02', 'OSINT Researcher', 'Uncovering patterns, verifying facts, and turning data into clarity.'],
  ['03', 'Prison Guard', 'Discipline, firmness, and complete awareness in every security detail.'],
]

function App() {
  const [design, setDesign] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [useCyberEdit, setUseCyberEdit] = useState(false)

  // Real scroll tracking for parallax depth calculations
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth body background and text color update when switching designs
  useEffect(() => {
    if (design === 2) {
      document.body.style.background = '#090d16'
      document.body.style.color = '#e2e8f0'
    } else if (design === 3) {
      document.body.style.background = '#f8fafc'
      document.body.style.color = '#0f172a'
    } else if (design === 4) {
      document.body.style.background = '#050811'
      document.body.style.color = '#f1f5f9'
    } else {
      document.body.style.background = '#f0efec'
      document.body.style.color = '#131313'
    }
  }, [design])

  return (
    <div className={`design-v${design}`}>
      {/* NAVBAR */}
      <nav className="nav wrap">
        <a className="brand" href="#top"><span>TS</span> TEGAR SUKMAWAN</a>
        
        <div className="nav-links">
          <a href="#profile">Profile</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
          
          {/* DESIGN TOGGLE IN NAVBAR (4 DESIGNS) */}
          <div className="design-switch-container" title="Switch Design Theme">
            <button 
              className={`design-btn ${design === 1 ? 'active' : ''}`}
              onClick={() => setDesign(1)}
            >
              <Layers size={13}/> Design 1
            </button>
            <button 
              className={`design-btn ${design === 2 ? 'active' : ''}`}
              onClick={() => setDesign(2)}
            >
              <Sparkles size={13}/> Design 2
            </button>
            <button 
              className={`design-btn ${design === 3 ? 'active' : ''}`}
              onClick={() => setDesign(3)}
            >
              <Sun size={13}/> Design 3
            </button>
            <button 
              className={`design-btn ${design === 4 ? 'active' : ''}`}
              onClick={() => setDesign(4)}
            >
              <Zap size={13}/> Design 4 (Parallax)
            </button>
          </div>
        </div>

        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
        
        <button 
          className="menu" 
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={22}/>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <a className="brand" href="#top" onClick={() => setMobileMenuOpen(false)}>
              <span>TS</span> TEGAR SUKMAWAN
            </a>
            <button className="menu" onClick={() => setMobileMenuOpen(false)}>
              <X size={24}/>
            </button>
          </div>

          <div style={{ marginTop: '15px', marginBottom: '15px' }}>
            <p style={{ fontSize: '11px', fontFamily: 'DM Mono, monospace', opacity: 0.7, marginBottom: '8px' }}>
              SELECT DESIGN VARIANT:
            </p>
            <div className="design-switch-container" style={{ width: '100%', flexWrap: 'wrap' }}>
              <button 
                className={`design-btn ${design === 1 ? 'active' : ''}`}
                onClick={() => { setDesign(1); setMobileMenuOpen(false); }}
              >
                <Layers size={13}/> Design 1 (Editorial)
              </button>
              <button 
                className={`design-btn ${design === 2 ? 'active' : ''}`}
                onClick={() => { setDesign(2); setMobileMenuOpen(false); }}
              >
                <Sparkles size={13}/> Design 2 (Cyber)
              </button>
              <button 
                className={`design-btn ${design === 3 ? 'active' : ''}`}
                onClick={() => { setDesign(3); setMobileMenuOpen(false); }}
              >
                <Sun size={13}/> Design 3 (Executive)
              </button>
              <button 
                className={`design-btn ${design === 4 ? 'active' : ''}`}
                onClick={() => { setDesign(4); setMobileMenuOpen(false); }}
              >
                <Zap size={13}/> Design 4 (Parallax)
              </button>
            </div>
          </div>

          <div className="mobile-menu-links">
            <a href="#profile" onClick={() => setMobileMenuOpen(false)}>Profile</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a 
              href="mailto:tegar.sukmawan@gmail.com" 
              onClick={() => setMobileMenuOpen(false)} 
              style={{ 
                color: design === 2 ? '#00f2fe' : design === 3 ? '#2563eb' : design === 4 ? '#c084fc' : 'var(--red)' 
              }}
            >
              Start a conversation →
            </a>
          </div>
        </div>
      )}

      {/* RENDER SELECTED DESIGN */}
      {design === 1 ? (
        /* ================= DESIGN 1: EDITORIAL CLASSIC ================= */
        <>
          <section id="top" className="hero">
            <div className="hero-noise" />
            <p className="eyebrow hero-tag"><span /> DIGITAL SECURITY · INDONESIA</p>
            <div 
              className="hero-image" 
              style={{ backgroundImage: `url(${tegarsukmawanImg})` }}
              aria-label="Portrait of Tegar Sukmawan" 
            />
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
              <div className="section-head">
                <p className="eyebrow light"><span /> CORE EXPERTISE</p>
                <p>03 fields, one mission:<br />creating a sense of security.</p>
              </div>
              <div className="cap-list">
                {capabilities.map(([number, title, description]) => (
                  <article className="cap" key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ArrowUpRight className="cap-arrow" size={22}/>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="contact wrap">
            <div>
              <p className="eyebrow"><span /> CONNECT</p>
              <h2>Have something<br />that needs <em>securing?</em></h2>
            </div>
            <a className="contact-button" href="mailto:tegar.sukmawan@gmail.com">
              Start a conversation <ArrowUpRight size={22}/>
            </a>
          </section>
        </>
      ) : design === 2 ? (
        /* ================= DESIGN 2: CYBER GLASSMORPHIC NEON ================= */
        <>
          <section id="top" className="cyber-hero">
            <div className="cyber-grid-bg" />
            <div className="wrap cyber-hero-inner">
              <div>
                <div className="cyber-badge">
                  <span className="cyber-badge-dot" /> DIGITAL SECURITY · INDONESIA
                </div>
                <h1>
                  <span className="cyan-glow">TEGAR</span><br />
                  <span className="outline-glow">SUKMAWAN</span>
                </h1>
                <p className="cyber-hero-intro">
                  Programmer, OSINT researcher, and guardian who believes security begins with precision. One step ahead, one threat behind.
                </p>
                <div className="cyber-actions">
                  <a href="mailto:tegar.sukmawan@gmail.com" className="cyber-primary-btn">
                    Start a conversation <ArrowUpRight size={18}/>
                  </a>
                  <a href="#profile" className="cyber-secondary-btn">
                    Explore Profile <ArrowDownRight size={16}/>
                  </a>
                </div>
              </div>

              <div className="cyber-portrait-wrapper">
                <div className="cyber-portrait-frame">
                  <img src={tegarsukmawanImg} alt="Tegar Sukmawan" className="cyber-portrait-img" />
                  <div className="cyber-scan-line" />
                  <div className="cyber-hud-chip">
                    <div>
                      <p>STATUS</p>
                      <strong>SYSTEM ACTIVE</strong>
                    </div>
                    <div>
                      <p>VERIFIED</p>
                      <strong style={{ color: '#00f2fe' }}>100% SECURE</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="profile" className="cyber-statement wrap">
            <div className="cyber-badge">
              <span className="cyber-badge-dot" /> ABOUT ME
            </div>
            <div className="cyber-card-grid">
              <div className="cyber-glass-card">
                <h2>Combining <em>firmness</em> &amp; technology.</h2>
                <p>
                  I work at the intersection of technology, open-source intelligence, and security. My approach is simple: understand risks, master information, and move with precision.
                </p>
                <a href="#expertise" className="cyber-secondary-btn" style={{ width: 'fit-content' }}>
                  Explore expertise <ArrowDownRight size={16}/>
                </a>
              </div>

              <div className="cyber-glass-card" style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '12px', color: '#00f2fe', marginBottom: '16px' }}>
                    <Terminal size={24}/>
                    <Cpu size={24}/>
                    <Lock size={24}/>
                  </div>
                  <h3 style={{ fontSize: '22px', margin: '0 0 12px', color: '#f8fafc' }}>
                    Multi-disciplinary Guardian
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8' }}>
                    Merging software engineering, intelligence gatherer methodologies, and physical security discipline into one cohesive shield.
                  </p>
                </div>
                <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#64748b' }}>
                  LOCATION: INDONESIA · CORE: SECURITY
                </div>
              </div>
            </div>
          </section>

          <section id="expertise" className="cyber-capabilities">
            <div className="wrap">
              <div className="cyber-badge">
                <span className="cyber-badge-dot" /> CORE EXPERTISE
              </div>
              <h2 style={{ fontSize: '36px', color: '#f8fafc', margin: '12px 0 0' }}>
                03 fields, one mission: <span style={{ color: '#00f2fe' }}>creating security.</span>
              </h2>

              <div className="cyber-cap-grid">
                {capabilities.map(([number, title, description]) => (
                  <div className="cyber-cap-card" key={number}>
                    <div>
                      <div className="cyber-cap-num">
                        <span>{number} // FOCUS</span>
                        <ArrowUpRight size={18}/>
                      </div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px', itemsCenter: 'center', fontSize: '11px', color: '#64748b', fontFamily: 'DM Mono, monospace' }}>
                      {number === '01' && <Cpu size={14} color="#00f2fe"/>}
                      {number === '02' && <Eye size={14} color="#00f2fe"/>}
                      {number === '03' && <Lock size={14} color="#00f2fe"/>}
                      <span>MODULE ARCHITECTURE</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="cyber-contact wrap">
            <div className="cyber-contact-box">
              <div className="cyber-badge" style={{ margin: '0 auto 16px' }}>
                <span className="cyber-badge-dot" /> CONNECT
              </div>
              <h2>
                Have something that needs <em>securing?</em>
              </h2>
              <p style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '15px' }}>
                Direct email communication channel is open and monitored.
              </p>
              <a className="cyber-contact-btn" href="mailto:tegar.sukmawan@gmail.com">
                Start a conversation <ArrowUpRight size={20}/>
              </a>
            </div>
          </section>
        </>
      ) : design === 3 ? (
        /* ================= DESIGN 3: EXECUTIVE CLEAN LIGHT ================= */
        <>
          <section id="top" className="clean-hero wrap">
            <div className="clean-hero-card">
              <div>
                <div className="clean-pill">
                  <ShieldCheck size={14}/> DIGITAL SECURITY · INDONESIA
                </div>
                <h1>
                  TEGAR<br />
                  <span>SUKMAWAN</span>
                </h1>
                <p className="clean-hero-p">
                  Programmer, OSINT researcher, and guardian who believes security begins with precision. One step ahead. One threat behind.
                </p>
                <div className="clean-cta-group">
                  <a href="mailto:tegar.sukmawan@gmail.com" className="clean-primary-btn">
                    Start a conversation <ArrowUpRight size={18}/>
                  </a>
                  <a href="#profile" className="clean-secondary-btn">
                    Profile <ArrowDownRight size={16}/>
                  </a>
                </div>
              </div>

              <div className="clean-avatar-box">
                <img src={tegarsukmawanImg} alt="Tegar Sukmawan" className="clean-avatar-img" />
                <div className="clean-avatar-tag">
                  <div>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, display: 'block' }}>PRIMARY FOCUS</span>
                    <strong style={{ fontSize: '13px', color: '#0f172a' }}>Cyber &amp; Intelligence</strong>
                  </div>
                  <CheckCircle2 size={20} color="#2563eb"/>
                </div>
              </div>
            </div>
          </section>

          <section id="profile" className="clean-statement wrap">
            <div className="clean-stat-grid">
              <div className="clean-white-card">
                <div className="clean-pill" style={{ background: '#f8fafc', borderColor: '#e2e8f0', color: '#475569' }}>
                  ABOUT ME
                </div>
                <h2>Combining <em>firmness</em> and technology.</h2>
                <p>
                  I work at the intersection of technology, open-source intelligence, and security. My approach is simple: understand risks, master information, and move with precision.
                </p>
                <a href="#expertise" className="clean-secondary-btn" style={{ width: 'fit-content' }}>
                  Explore expertise <ArrowDownRight size={16}/>
                </a>
              </div>

              <div className="clean-white-card" style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 100%)', borderColor: '#bfdbfe' }}>
                <div style={{ display: 'flex', gap: '12px', color: '#2563eb', marginBottom: '24px' }}>
                  <Briefcase size={28}/>
                  <Award size={28}/>
                </div>
                <h3 style={{ fontSize: '24px', margin: '0 0 14px', color: '#0f172a' }}>
                  Integrated Security Solutions
                </h3>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
                  Integrating software development expertise with open-source threat analysis and tactical vigilance to safeguard digital &amp; physical assets.
                </p>
              </div>
            </div>
          </section>

          <section id="expertise" className="clean-capabilities">
            <div className="wrap">
              <div className="clean-pill">CORE EXPERTISE</div>
              <h2 style={{ fontSize: '38px', color: '#0f172a', margin: '12px 0 0', fontWeight: 800 }}>
                03 fields, one mission: <span style={{ color: '#2563eb' }}>creating a sense of security.</span>
              </h2>

              <div className="clean-cap-cards">
                {capabilities.map(([number, title, description]) => (
                  <div className="clean-cap-item" key={number}>
                    <div className="clean-cap-icon">
                      {number === '01' && <Cpu size={22}/>}
                      {number === '02' && <Eye size={22}/>}
                      {number === '03' && <Lock size={22}/>}
                    </div>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '1px', marginBottom: '8px' }}>
                      PRACTICE {number}
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="clean-contact wrap">
            <div className="clean-contact-box">
              <div className="clean-pill" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff' }}>
                CONNECT
              </div>
              <h2>Have something that needs <em>securing?</em></h2>
              <p style={{ color: '#94a3b8', maxWidth: '500px', margin: '0 auto 36px', fontSize: '16px' }}>
                Let's discuss how precision technology and security discipline can protect your assets.
              </p>
              <a className="clean-contact-btn" href="mailto:tegar.sukmawan@gmail.com">
                Start a conversation <ArrowUpRight size={20}/>
              </a>
            </div>
          </section>
        </>
      ) : (
        /* ================= DESIGN 4: DEEP SPACE PARALLAX EXPERIENCE ================= */
        <>
          <section id="top" className="parallax-hero wrap">
            {/* Parallax depth background layers */}
            <div 
              className="parallax-bg-orb-1" 
              style={{ transform: `translateY(${scrollY * 0.25}px)` }} 
            />
            <div 
              className="parallax-bg-orb-2" 
              style={{ transform: `translateY(${scrollY * -0.15}px)` }} 
            />

            <div className="parallax-hero-inner">
              {/* TOP HERO TEXT */}
              <div className="parallax-hero-top" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
                <div>
                  <div className="parallax-tag-badge">
                    <Activity size={14} color="#c084fc"/> PARALLAX DEPTH · DIGITAL SECURITY
                  </div>
                  <h1>
                    <span className="purple-gradient">TEGAR</span><br />
                    <span className="glass-text">SUKMAWAN</span>
                  </h1>
                </div>
                <div>
                  <p className="parallax-hero-desc">
                    Programmer, OSINT researcher, and guardian who believes security begins with precision. One step ahead, one threat behind.
                  </p>
                  <div className="parallax-cta-row">
                    <a href="mailto:tegar.sukmawan@gmail.com" className="parallax-btn-glow">
                      Start a conversation <ArrowUpRight size={18}/>
                    </a>
                    <a href="#profile" className="parallax-btn-glass">
                      Explore Depth <ArrowDownRight size={16}/>
                    </a>
                  </div>
                </div>
              </div>

              {/* HIGH-VISIBILITY FEATURED PORTRAIT SHOWCASE */}
              <div 
                className="parallax-showcase-box"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
              >
                <div className="parallax-portrait-frame-large">
                  <img 
                    src={useCyberEdit ? tegarsukmawanParallaxImg : tegarsukmawanImg} 
                    onError={(e) => {
                      if (e.currentTarget.src !== tegarsukmawanImg) {
                        e.currentTarget.src = tegarsukmawanImg
                      }
                    }}
                    alt="Tegar Sukmawan" 
                    className="parallax-portrait-img-large"
                  />

                  {/* Photo Switcher Chip */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 10,
                    background: 'rgba(15, 23, 42, 0.9)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    borderRadius: '20px',
                    padding: '4px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    fontFamily: 'DM Mono, monospace'
                  }}>
                    <button 
                      onClick={() => setUseCyberEdit(false)}
                      style={{
                        border: 'none',
                        background: !useCyberEdit ? '#a855f7' : 'transparent',
                        color: !useCyberEdit ? '#fff' : '#94a3b8',
                        borderRadius: '12px',
                        padding: '3px 8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Original Photo
                    </button>
                    <button 
                      onClick={() => setUseCyberEdit(true)}
                      style={{
                        border: 'none',
                        background: useCyberEdit ? '#a855f7' : 'transparent',
                        color: useCyberEdit ? '#fff' : '#94a3b8',
                        borderRadius: '12px',
                        padding: '3px 8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      Cyber Art
                    </button>
                  </div>
                </div>

                <div className="parallax-showcase-info">
                  <h3>Tegar Sukmawan</h3>
                  <p>
                    Multidisciplinary specialist operating in digital system architecture, open-source intelligence research, and tactical security.
                  </p>
                  
                  <div className="parallax-stats-pills">
                    <div className="parallax-stat-chip">
                      SPECIALTY
                      <strong>01. Programmer</strong>
                    </div>
                    <div className="parallax-stat-chip">
                      INTELLIGENCE
                      <strong>02. OSINT Specialist</strong>
                    </div>
                    <div className="parallax-stat-chip">
                      TACTICAL
                      <strong>03. Prison Guard</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="profile" className="parallax-statement wrap">
            <div 
              className="parallax-banner"
              style={{ transform: `translateY(${scrollY * 0.04}px)` }}
            >
              <div>
                <div className="parallax-tag-badge" style={{ marginBottom: '16px' }}>
                  ABOUT ME
                </div>
                <h2>Combining <em>firmness</em> &amp; technology.</h2>
              </div>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: '1.7', margin: '0 0 28px' }}>
                  I work at the intersection of technology, open-source intelligence, and security. My approach is simple: understand risks, master information, and move with precision.
                </p>
                <a href="#expertise" className="parallax-btn-glass" style={{ width: 'fit-content' }}>
                  Explore expertise <ArrowDownRight size={16}/>
                </a>
              </div>
            </div>
          </section>

          <section id="expertise" className="parallax-capabilities">
            <div className="wrap">
              <div className="parallax-tag-badge">
                CORE EXPERTISE
              </div>
              <h2 style={{ fontSize: '42px', color: '#f8fafc', margin: '12px 0 0', fontWeight: 800 }}>
                03 fields, one mission: <span style={{ color: '#c084fc' }}>creating a sense of security.</span>
              </h2>

              <div className="parallax-cap-grid">
                {capabilities.map(([number, title, description], index) => (
                  <div 
                    className="parallax-cap-card" 
                    key={number}
                    style={{ transform: `translateY(${(scrollY - 600) * (0.02 * (index + 1))}px)` }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#c084fc', letterSpacing: '2px' }}>
                          LAYER {number}
                        </span>
                        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(168,85,247,0.15)', display: 'grid', placeItems: 'center', color: '#c084fc' }}>
                          {number === '01' && <Cpu size={18}/>}
                          {number === '02' && <Eye size={18}/>}
                          {number === '03' && <Lock size={18}/>}
                        </div>
                      </div>
                      <h3 style={{ fontSize: '26px', margin: '0 0 12px', color: '#f8fafc' }}>{title}</h3>
                      <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>{description}</p>
                    </div>

                    <div style={{ marginTop: '28px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#a78bfa', fontFamily: 'DM Mono, monospace' }}>
                      <span>DEPTH MATRIX</span>
                      <ArrowUpRight size={16}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="parallax-contact wrap">
            <div 
              className="parallax-contact-card"
              style={{ transform: `translateY(${(scrollY - 1200) * 0.03}px)` }}
            >
              <div className="parallax-tag-badge" style={{ margin: '0 auto 16px' }}>
                CONNECT
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', margin: '16px 0 24px', color: '#f8fafc' }}>
                Have something that needs <span style={{ color: '#c084fc' }}>securing?</span>
              </h2>
              <p style={{ color: '#94a3b8', maxWidth: '520px', margin: '0 auto 36px', fontSize: '16px' }}>
                Direct email contact line is available for security consultations and projects.
              </p>
              <a className="parallax-btn-glow" href="mailto:tegar.sukmawan@gmail.com">
                Start a conversation <ArrowUpRight size={20}/>
              </a>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="footer wrap">
        <span>© 2026 Tegar Sukmawan</span>
        <span><ShieldCheck size={15}/> Built with purpose</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
