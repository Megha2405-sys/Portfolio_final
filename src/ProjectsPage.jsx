import React from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from '../data.js';
import '../styles.css';

function ProjectsPage() {
  return <>
    <a className="skip-link" href="#projects-main">Skip to content</a>
    <header className="site-header projects-header">
      <a className="brand" href="/" aria-label="Harshini Meghana Kotha, home"><span className="brand-mark">HM</span><span>HARSHINI<br/><b>MEGHANA KOTHA</b></span></a>
      <nav aria-label="Project navigation"><a href="/">← BACK TO PORTFOLIO</a><a href="/#contact">CONTACT</a></nav>
    </header>
    <main className="projects-page" id="projects-main">
      <div className="projects-page-intro">
        <p className="eyebrow"><span className="pulse"/> A FEW THINGS I’VE BEEN WORKING ON</p>
        <h1>Projects, in progress<br/><span>and in practice.</span></h1>
        <p className="projects-page-lead">A couple of projects from my resume, with a little context about what each one does. I’ll add more as I build and document them.</p>
      </div>
      <div className="projects-detail-list">
        {projects.map((project, index) => <article className="project-detail-card" key={project.title}>
          <div className="project-detail-top"><span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span className={`project-badge ${project.status === 'Proposed' ? 'is-proposed' : ''}`}>{project.status}</span></div>
          <h2>{project.title}</h2>
          <p className="project-detail-description">{project.description}</p>
          <ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          {project.note && <p className="project-detail-note">{project.note}</p>}
          <div className="project-actions">
            {project.live ? <a className="button button-primary project-repo-link" href={project.live} target="_blank" rel="noreferrer">OPEN LIVE DEMO <span aria-hidden="true">↗</span></a> : <span className="project-demo-pending">LIVE DEMO LINK COMING SOON</span>}
            {project.github && <a className="button button-quiet project-repo-link" href={project.github} target="_blank" rel="noreferrer">VIEW SOURCE ON GITHUB <span aria-hidden="true">↗</span></a>}
          </div>
        </article>)}
      </div>
      <p className="projects-page-outro">More project write-ups will be added here as they’re ready.</p>
    </main>
    <footer className="site-footer"><a className="brand" href="/" aria-label="Harshini Meghana Kotha, home"><span className="brand-mark">HM</span><span>HARSHINI<br/><b>MEGHANA KOTHA</b></span></a><span>MADE WHILE LEARNING <i>·</i> © {new Date().getFullYear()}</span><a href="#projects-main">BACK TO TOP ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<ProjectsPage/>);
