
import './Skills.css';

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", icon: "fab fa-js", gradientClass: "gradient1" },
    { name: "TypeScript", icon: "fab fa-js", gradientClass: "gradient2" },
    { name: "Python", icon: "fab fa-python", gradientClass: "gradient3" },
    { name: "C", icon: "fab fa-cuttlefish", gradientClass: "gradient4" }
  ];

  const frameworkSkills = [
    { name: "React", icon: "fab fa-react", gradientClass: "gradient1" },
    { name: "Tailwind CSS", icon: "fab fa-css3-alt", gradientClass: "gradient2" },
    { name: "Node.js", icon: "fab fa-node", gradientClass: "gradient3" },
    { name: "Express.js", icon: "fas fa-server", gradientClass: "gradient4" },
    { name: "Vue.js", icon: "fab fa-vuejs", gradientClass: "gradient5" },
    { name: "Angular", icon: "fab fa-angular", gradientClass: "gradient6" },
    { name: "Next.js", icon: "fab fa-nextjs", gradientClass: "gradient7" }
  ];

  const databaseSkills = [
    { name: "SQL", icon: "fas fa-database", gradientClass: "gradient1" },
    { name: "MongoDB", icon: "fab fa-mongodb", gradientClass: "gradient2" }
  ];

  const technicalSkills = [
    { name: "Network Support", icon: "fas fa-network-wired", gradientClass: "gradient1" },
    { name: "Servers", icon: "fas fa-server", gradientClass: "gradient2" },
    { name: "Cloud", icon: "fas fa-cloud", gradientClass: "gradient3" },
    { name: "Microsoft OS", icon: "fab fa-windows", gradientClass: "gradient4" },
    { name: "Linux", icon: "fab fa-linux", gradientClass: "gradient5" }
  ];

  return (
    <section id='skills' className='skills-section'>
      <div className="skills-header">
        <h1>SKILLS</h1>
      </div>

      <div className="skill-category">
        <h2>Programming Languages</h2>
        <div className="skills-container">
          {programmingSkills.map((skill, index) => (
            <div key={index} className={`skill-box ${skill.gradientClass}`}>
              <div className="skill-content">
                <i className={skill.icon}></i>
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h2>Frameworks & Libraries</h2>
        <div className="skills-container">
          {frameworkSkills.map((skill, index) => (
            <div key={index} className={`skill-box ${skill.gradientClass}`}>
              <div className="skill-content">
                <i className={skill.icon}></i>
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h2>Database Management</h2>
        <div className="skills-container">
          {databaseSkills.map((skill, index) => (
            <div key={index} className={`skill-box ${skill.gradientClass}`}>
              <div className="skill-content">
                <i className={skill.icon}></i>
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skill-category">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {technicalSkills.map((skill, index) => (
            <div key={index} className={`skill-box ${skill.gradientClass}`}>
              <div className="skill-content">
                <i className={skill.icon}></i>
                <h2>{skill.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
