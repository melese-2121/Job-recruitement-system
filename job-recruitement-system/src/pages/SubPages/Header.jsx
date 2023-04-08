import { BiSearchAlt2 } from "react-icons/bi";
import {
  FaFacebookF,
  FaTelegram,
  FaInstagram,
  FaUserAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import {
  Modal,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import Login from "../Login";
import "C:/Users/meles/Documents/GitHub/Job-recruitement-system/job-recruitement-system/src/css/Header.css";

function Header() {
  // Search modal controlling hook
  const [lgShow, setLgShow] = useState(false);

  // Nav styling
  const navStyling = ({ isActive }) => {
    if (isActive) {
      return {
        color: "#0fe60e",
      };
    } else return { textDecoration: "none", color: "White" };
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Container className="logo-container" fluid>
          <Navbar.Brand className="fs-2 fw-bold text-info" href="#home">
            Company Logo
          </Navbar.Brand>
          <Container className="nav-container" fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", displayContent: "space-between" }}
                navbarScroll
              >
                <div
                  style={{
                    justifyContent: "space-between",
                    marginTop: "7px",
                  }}
                >
                  <NavLink to="/" style={navStyling} className="fs-5">
                    Home
                  </NavLink>
                  <NavLink to="/news" className="fs-5 mx-3" style={navStyling}>
                    News
                  </NavLink>

                  <NavLink to="/about" className="fs-5" style={navStyling}>
                    About
                  </NavLink>
                </div>

                <NavLink
                  className="text-white text-decoration-none"
                  style={navStyling}
                >
                  <NavDropdown
                    title="Community"
                    id="navbarScrollingDropdown"
                    className="text-light fs-5"
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>

        {/* <Container>
          <form className="form-inline">
            <input
              style={{ width: "200px" }}
              onClick={() => {
                setLgShow(!lgShow);
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </Container> */}

        <Container className="d-flex" fluid>
          <Container>
            <IconContext.Provider value={{ color: "white", className: "fs-4" }}>
              <a href="http://facebook.com/">
                <FaFacebookF href="#facebook" />
              </a>
              <a href="http://telegram.com/">
                <FaTelegram href="#telegram" className="mx-4" />
              </a>
              <a href="http://instagram.com/">
                <FaInstagram href="#instagram" />
              </a>
            </IconContext.Provider>
          </Container>

          <Container className="account-buttons">
            <Button variant="outline-success rounded-pill px-4">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign up
              </Link>
            </Button>
            <IconContext.Provider
              value={{
                color: "rgb(0, 156, 55)",
                className: "fs-2",
              }}
            >
              <Link
                to="/login"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <FaUserAlt style={{ cursor: "pointer", title: "Sign In" }} />
              </Link>
              <div
                className="modal fade"
                id="exampleModal"
                style={{ marginLeft: "30%" }}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog ">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <Login />
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-outline-primary">
                        Save changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </IconContext.Provider>
          </Container>
        </Container>

        {/* <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header style={{ color: "pink" }} closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Search resource
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="my-2">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8">
                <div className="search">
                  <input
                    type="text"
                    className="form-control fs-6"
                    placeholder="Search Here..."
                  />
                  <Button
                    variant="outline-info"
                    style={{ color: "white", border: "none" }}
                  >
                    <IconContext.Provider
                      value={{ color: "black", className: "fs-3" }}
                    >
                      <BiSearchAlt2 />
                    </IconContext.Provider>
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}
      </Container>
    </Navbar>
  );
}

export default Header;
