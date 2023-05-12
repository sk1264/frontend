import './Projects.css';

function Projects({ projects }) {
    return projects.map((project) => (
        <div className="projects-container">
        <h1>{project.name}</h1>
        <img src={project.image} alt="Project" className="projects-image" />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ));
  }
  
  export default Projects;