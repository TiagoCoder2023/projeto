import { portfolioProjects } from '../data/config';

function Portfolio() {
    return (
        <div className="section">
            <h2 className="section-title">Portfólio</h2>
            <div className="portfolio-grid">
                {portfolioProjects.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="globe-outline"></ion-icon>
                                    Ver Projeto
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="logo-github"></ion-icon>
                                    Código
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;

