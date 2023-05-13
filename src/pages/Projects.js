import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Projects.css'; // import CSS file for styling

function Projects({ projects }) {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={project.image} alt="Project" className="projects-image" />
          <Card.Body>
            <Card.Title> {project.name} </Card.Title>
            <div class="button-container">
            <Button variant="primary" href={project.live}> Live </Button>
            <Button variant="primary" href={project.git}> GitHub </Button></div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Projects;
