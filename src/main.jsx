import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { profile, skillGroups, projects, pipeline } from '../data.js';
import '../styles.css';

const HeroScene = lazy(() => import('./HeroScene.jsx'));

function Brand() {
  return <a className="brand" href="#top" aria-label="Harshini Meghana Kotha, home"><span className="brand-mark">HM</span><span>HARSHINI<br/><b>MEGHANA KOTHA</b></span></a>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [stage, setStage] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener?.('change', update);
    document.querySelector('#year').textContent = new Date().getFullYear();
    return () => media.removeEventListener?.('change', update);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('light', light);
    return () => document.body.classList.remove('light');
  }, [light]);
  useEffect(() => {
    if (!resumeOpen) return undefined;
    const close = event => { if (event.key === 'Escape') setResumeOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [resumeOpen]);
  const contactItems = [
    profile.phone && { label: 'Phone', text: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, '')}` },
    profile.email && { label: 'Email', href: `mailto:${profile.email}` },
    profile.linkedin && { label: 'LinkedIn', href: profile.linkedin },
    profile.github && { label: 'GitHub', href: profile.github },
    profile.portfolio && { label: 'Portfolio', href: profile.portfolio }
  ].filter(Boolean);
  const workItems = projects.length ? projects : [
    { title: 'Python applications', note: 'A space for a documented backend or Python application project.' },
    { title: 'Computer vision', note: 'A space for a real OpenCV or image-processing project.' },
    { title: 'Data & machine learning', note: 'A space for a completed analysis or model with its results.' }
  ];

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" id="top"><Brand/>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
      <nav id="primary-nav" className={menuOpen ? 'open' : ''} aria-label="Primary navigation" onClick={() => setMenuOpen(false)}><a href="#about"><i>01</i> ABOUT</a><a href="#work"><i>02</i> WORK</a><a href="#system"><i>03</i> SYSTEM</a><a href="#contact"><i>04</i> CONTACT</a><button className="theme-toggle" onClick={event => { event.stopPropagation(); setLight(!light); }} aria-label={`Switch to ${light ? 'dark' : 'light'} theme`}><span aria-hidden="true">{light ? '☾' : '☼'}</span> <b>{light ? 'DARK' : 'LIGHT'}</b></button></nav>
    </header>
    <main id="main">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="pulse"/> DATA SCIENCE <i>·</i> SOFTWARE ENGINEERING <i>·</i> COMPUTER VISION</p>
          <h1 id="hero-title">Making sense of data.<br/><span>Making useful things.</span></h1>
          <p className="hero-intro">I’m Harshini, a Data Science student who likes figuring out how things work—and then making them easier to use.</p>
          <p className="hero-detail">Lately that means Python, data workflows, and the small decisions that turn a technical idea into something people can actually use.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">TAKE A LOOK AROUND <span aria-hidden="true">↘</span></a><button className="button button-quiet" onClick={() => setResumeOpen(true)}>VIEW RESUME</button></div>
          <p className="hero-meta">B.TECH DATA SCIENCE <span>/</span> SRM AP <span>/</span> EXPECTED 2028</p>
        </div>
        <Suspense fallback={<div className="hero-visual scene-loading" aria-label="Loading computational study"/>}><HeroScene reducedMotion={reducedMotion}/></Suspense>
        <div className="hero-foot"><span><span className="pulse"/> CURRENTLY LEARNING & BUILDING</span><span>SRM UNIVERSITY–ANDHRA PRADESH</span><span>SCROLL WHEN READY ↓</span></div>
      </section>

      <section className="content-section about-section" id="about"><div className="section-index"><span>01</span><span>A LITTLE ABOUT ME</span></div><div className="section-body"><p className="eyebrow">THE PERSON BEHIND THE PROJECTS</p><h2>Curious about how things work.<br/><span>Happiest when I can make them clearer.</span></h2>
        <div className="about-grid"><div><p className="lead">I’m studying Data Science at SRM University–Andhra Pradesh, where I get to move between code, data, and the questions behind them.</p><p>I’ve been learning through Python applications and exploring backend services, computer vision, and machine learning. I enjoy the practical middle of a problem: cleaning up the input, making the pieces talk to each other, and giving someone a result they can understand.</p><p className="muted">Still learning, still trying things, and getting a little better with every build.</p></div>
          <div className="architecture-panel"><div className="panel-head"><span>A USEFUL WAY TO THINK ABOUT IT</span><span>SKETCH / 01</span></div><div className="flow-stack" aria-label="Conceptual workflow: input, processing, API or model, output"><div className="flow-node active"><b>01</b><span>START WITH A QUESTION</span><small>input</small></div><div className="flow-link"/><div className="flow-node"><b>02</b><span>MAKE SENSE OF IT</span><small>process</small></div><div className="flow-link"/><div className="flow-node"><b>03</b><span>BUILD THE LOGIC</span><small>API / model</small></div><div className="flow-link"/><div className="flow-node"><b>04</b><span>MAKE IT USEFUL</span><small>output</small></div></div><p className="panel-note">A small sketch of the questions I like working through.</p></div></div>
      </div></section>

      <section className="content-section skills-section" id="skills"><div className="section-index"><span>02</span><span>WHAT I USE</span></div><div className="section-body"><p className="eyebrow">TOOLS I’M GETTING GOOD WITH</p><h2>A growing toolkit,<br/><span>used one problem at a time.</span></h2><div className="skill-grid">{skillGroups.map((group,index)=><article className="skill-card" key={group.title} tabIndex="0"><span className="skill-number">{String(index+1).padStart(2,'0')}</span><h3>{group.title}</h3><p>{group.description}</p><div className="tags">{group.tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

      <section className="content-section work-section" id="work"><div className="section-index"><span>03</span><span>THINGS I’VE MADE</span></div><div className="section-body"><p className="eyebrow">WORK, AS IT TAKES SHAPE</p><h2>Learning by making.<br/><span>More to come.</span></h2><p className="section-intro">I’m putting together proper write-ups for my projects—what I was trying to solve, what I built, and what I learned along the way.</p><div className="projects-grid">{workItems.map((project,index)=><article className="project-card" key={project.title}><span className="project-index">IN THE WORKS / {String(index+1).padStart(2,'0')}</span><div><h3>{project.title}</h3><p>{project.note ?? project.description}</p></div><div className="project-status">DETAILS COMING AS THEY’RE READY</div></article>)}</div></div></section>

      <section className="content-section system-section" id="system"><div className="section-index"><span>04</span><span>HOW I THINK ABOUT IT</span></div><div className="section-body"><p className="eyebrow">A SYSTEM, IN SIX QUESTIONS</p><h2>Inside the<br/><span>pipeline.</span></h2><p className="section-intro">A conceptual tour of a data-driven application. Pick a step and see the kinds of tools that might help.</p><div className="pipeline-layout"><div className="pipeline-steps" role="tablist" aria-label="Pipeline stages">{pipeline.map((item,index)=><button key={item.title} className="pipeline-step" role="tab" aria-selected={stage===index} aria-controls="pipeline-detail" id={`pipeline-tab-${index}`} tabIndex={stage===index?0:-1} onClick={()=>setStage(index)} onKeyDown={event=>{if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft'].includes(event.key)){event.preventDefault();const next=(index+(['ArrowDown','ArrowRight'].includes(event.key)?1:-1)+pipeline.length)%pipeline.length;setStage(next);document.querySelector(`#pipeline-tab-${next}`)?.focus();}}}><span>{String(index+1).padStart(2,'0')}</span>{item.title}</button>)}</div><article className="pipeline-detail" id="pipeline-detail" role="tabpanel" aria-labelledby={`pipeline-tab-${stage}`}><span className="detail-index">STAGE / {String(stage+1).padStart(2,'0')}</span><h3>{pipeline[stage].title}</h3><p>{pipeline[stage].purpose}</p><span className="detail-index">TOOLS I’M EXPLORING</span><div className="detail-tools">{pipeline[stage].tools.map(tool=><span className="tag" key={tool}>{tool}</span>)}</div></article></div></div></section>

      <section className="content-section education-section" id="education"><div className="section-index"><span>05</span><span>WHERE I’M LEARNING</span></div><div className="section-body"><p className="eyebrow">ONE STEP AT A TIME</p><h2>Grounded in data.<br/><span>Building toward software.</span></h2><div className="education-card"><div className="edu-date">2024 — 2028 <span>EXPECTED</span></div><div><h3>Bachelor of Technology, Data Science</h3><p>SRM University–Andhra Pradesh</p></div><div className="edu-mark">SRM<br/>AP</div></div></div></section>

      <section className="resume-band" id="resume"><div><p className="eyebrow">A MORE TRADITIONAL VIEW</p><h2>Resume / PDF</h2><p>Download the resume or open it in a new tab.</p></div><div className="resume-band-actions"><a className="button button-primary" href="/meghana.pdf" download="Harshini-Meghana-Kotha-Resume.pdf">DOWNLOAD RESUME PDF</a><button className="button button-quiet" onClick={() => setResumeOpen(true)}>VIEW RESUME</button></div></section>

      <section className="contact-section" id="contact"><div className="section-index"><span>06</span><span>SAY HELLO</span></div><div className="contact-content"><p className="eyebrow">LET’S TALK ABOUT SOMETHING INTERESTING</p><h2>Let’s make something<br/><span>useful.</span></h2><p>I’m interested in software development, Python applications, data-driven products, and intelligent systems. If you’re working on an interesting problem or opportunity, I’d love to hear about it.</p>{contactItems.length ? <div>{contactItems.map(item=><a className="contact-link" key={item.label} href={item.href} target={item.href.startsWith('http')?'_blank':undefined} rel={item.href.startsWith('http')?'noreferrer':undefined}>{item.text ?? item.label}<span>↗</span></a>)}</div> : <span className="contact-link contact-link-muted">Contact details coming soon</span>}<p className="contact-hint">Phone, LinkedIn, GitHub, and portfolio links are listed in my resume.</p></div></section>
    </main>
    <footer className="site-footer"><Brand/><span>MADE WHILE LEARNING <i>·</i> © <span id="year"/></span><a href="#top">BACK TO TOP ↑</a></footer>


    {resumeOpen && <div className="resume-overlay" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) setResumeOpen(false); }}><section className="resume-dialog" role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title"><div className="resume-tools"><span id="resume-dialog-title">HARSHINI MEGHANA KOTHA / RESUME</span><button className="close-dialog" aria-label="Close resume" onClick={() => setResumeOpen(false)}>&times;</button></div><iframe className="resume-pdf-frame" src="/meghana.pdf#view=FitH" title="Harshini Meghana Kotha resume PDF"/><div className="resume-actions"><a className="button button-primary" href="/meghana.pdf" download="Harshini-Meghana-Kotha-Resume.pdf">DOWNLOAD RESUME PDF</a><a className="button button-quiet" href="/meghana.pdf" target="_blank" rel="noreferrer">OPEN IN NEW TAB</a></div></section></div>}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
