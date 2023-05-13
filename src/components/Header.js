import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Nav variant="pills" defaultActiveKey="/home" style={{ padding: '5 20px' }}>
        <Nav.Item style={{ paddingRight: '10px' }}>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item style={{ paddingRight: '10px' }}>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Header;
