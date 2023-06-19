import { Container } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import Profile_Dropdown from "./Profile_Dropdown";

function ProfileAside({ searchBy }) {
  return (
    <Container fluid>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title"
                id="offcanvasDarkNavbarLabel"
              ></h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <aside>
                <div className="profile-navbar">
                  <div className="user-logo">
                    <img src="https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png" />
                  </div>
                  <nav>
                    <ul>
                      <li
                        style={{ marginTop: "10px" }}
                        className="li"
                        name="home"
                      >
                        <IconContext.Provider
                          value={{
                            color: "white",
                            className: "fs-2",
                          }}
                        >
                          <Link to="/login">
                            <AiOutlineHome
                              style={{ cursor: "pointer", title: "Sign In" }}
                            />
                          </Link>
                        </IconContext.Provider>

                        <li>Home</li>
                      </li>
                      <li
                        name="resume"
                        style={{ marginTop: "15px" }}
                        className="li"
                      >
                        <IconContext.Provider
                          value={{
                            color: "white",
                            className: "fs-2",
                          }}
                        >
                          <Link to="/login">
                            <CiEdit
                              style={{ cursor: "pointer", title: "Sign In" }}
                            />
                          </Link>
                        </IconContext.Provider>
                        <li>Setting</li>
                      </li>
                      <li
                        name="about"
                        style={{ marginTop: "15px" }}
                        className="li"
                      >
                        <IconContext.Provider
                          value={{
                            color: "white",
                            className: "fs-3",
                          }}
                        >
                          <Link to="#">
                            <CgProfile
                              style={{ cursor: "pointer", title: "Sign In" }}
                            />
                          </Link>
                          <li>About Me</li>
                        </IconContext.Provider>
                      </li>
                      <li
                        name="contact"
                        style={{ marginTop: "15px" }}
                        className="li"
                      >
                        <IconContext.Provider
                          value={{
                            color: "white",
                            className: "fs-2",
                          }}
                        >
                          <Link to="#">
                            <BiLogOut
                              style={{ cursor: "pointer", title: "Sign In" }}
                            />
                          </Link>
                        </IconContext.Provider>
                        <li>LogOut</li>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
          <Profile_Dropdown searchBy={searchBy} />
        </div>
      </nav>
    </Container>
  );
}

export default ProfileAside;
