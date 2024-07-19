import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "707 HOLDINGS PTY, LTD",
      description: "This is the description for project one.",
      link: "https://707holdings.co.za/",
      gradientClass: "gradient2",
      image: "seveno.jpeg"
    },
    {
      title: "AL-SYED STUDENT ACCOMODATION",
      description: "This is the description for project two.",
      link: "https://alsyeds.co.za/",
      gradientClass: "gradient3",
      image: "alsyed.jpeg"
    }
  ];

  return (
    <section id='projects'>
      <div className="projects-header w-full">
        <h1>PROJECTS</h1>
      </div>
      <div className="container1">
        {projects.map((project, index) => (
          <div key={index} className={`box1 ${project.gradientClass}`}>
            <div className="content1">
              <div className="screenshot" style={{ backgroundImage: `url(${project.image})` }}></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link}>Go to website</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
