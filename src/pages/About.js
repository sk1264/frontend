import './About.css';

function About({ about }) {
    return (
        <div className="about-container">
        <h2>{about.name}</h2>
        <h4>{about.email}</h4>
        <img src={about.headshot} alt="Headshot" className="about-image" />
        <p>{about.bio}</p>
      </div>
    );
  }
  
  export default About;