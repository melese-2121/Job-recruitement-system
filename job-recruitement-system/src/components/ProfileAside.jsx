import { Container } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function ProfileAside() {
  return (
    <Container fluid>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel"></h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <aside>
                <div className="profile-navbar">
                  <div className="user-logo">
                    <img src="https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png" />
                  </div>
                  <nav>
                    <ul>
                      <li className="selectedLink" name="home">
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
                        Home
                      </li>
                      <li name="resume">Edit Profile</li>
                      <li name="about">About Me</li>
                      <li name="contact">Logout</li>
                    </ul>
                  </nav>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default ProfileAside;
