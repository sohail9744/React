import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import MainBody from "./body";
import Frame from "./ifram";
import SliderReviews from "./slider";

export default function Home() {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <span>
            <img
              style={{ width: "79px" }}
              src="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
              alt="Something went wroung"
            ></img>
          </span>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px", paddingLeft: "111px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About Us</Nav.Link>
              <NavDropdown title="Media" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Audios</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Videos</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Courses</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Events</Nav.Link>
              <Nav.Link href="#action1">Ramadan Portal 2023</Nav.Link>

              <NavDropdown title="Other Activites" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Student corner
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Whatsapp Group
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Volunteer</NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Presentations
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Reading Material
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Refer a Friend
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Useful website
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="NQ Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Direct Link to Sadaqah
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Direct link to Zakat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Details of other projects
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action1">Contact Us</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MainBody />
      <Frame />
      <SliderReviews />
    </>
  );
}
