import { experience, education, skills } from '../data/config';

function Resume() {
    return (
        <div className="section">
            <h2 className="section-title">Currículo</h2>
            
            {/* Experiência */}
            <div className="resume-section">
                <h3>Experiência</h3>
                {experience.map((exp) => (
                    <div key={exp.id} className="experience-item">
                        <h4>{exp.title}</h4>
                        {exp.company && <div className="company">{exp.company}</div>}
                        <div className="period">{exp.period}</div>
                        <div className="description">{exp.description}</div>
                    </div>
                ))}
            </div>

            {/* Educação */}
            <div className="resume-section">
                <h3>Educação</h3>
                {education.map((edu) => (
                    <div key={edu.id} className="education-item">
                        <h4>{edu.title}</h4>
                        <div className="institution">{edu.institution}</div>
                        <div className="period">{edu.period}</div>
                    </div>
                ))}
            </div>

            {/* Habilidades */}
            <div className="resume-section">
                <h3>Habilidades</h3>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span>{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resume;

