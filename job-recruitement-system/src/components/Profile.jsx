import { NavLink } from "react-router-dom";
import "../css/Profile.css";

function Profile() {
  return (
    <>
      <div className="whole-container">
        <div className="area-container">
          <aside>
            <div className="profile-navbar">
              <div className="user-logo">
                <img src="https://e7.pngegg.com/pngimages/409/621/png-clipart-computer-icons-avatar-male-user-profile-others-logo-monochrome.png" />
              </div>
              <nav>
                <ul>
                  <li className="selectedLink" name="home">
                    Home
                  </li>
                  <li name="resume">Edit Profile</li>
                  <li name="about">About Me</li>
                  <li name="contact">Logout</li>
                </ul>
              </nav>
            </div>
          </aside>

          <div className="user-card active home">
            <div
              className="title"
              style={{
                color: "blueviolet",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Recently Posted Jobs
            </div>
            <div className="user-card-container">
              <div style={{ display: "flex", justifyContent: "spaceBetween" }}>
                <div style={{ borderStyle: "ridge", padding: "5px" }}>
                  <img
                    src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Image"
                    width="300px"
                    height="200px"
                  />
                  <h4>Amazon.com Inc. (AMZN)</h4>
                  <p>discription about job will be written here</p>
                  <div className="d-grid gap-2">
                    <NavLink
                      to="/profile/doc"
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      <button
                        className="btn btn-success"
                        style={{ width: "100%" }}
                        type="button"
                      >
                        Apply
                      </button>
                    </NavLink>
                  </div>{" "}
                </div>
                <div style={{ borderStyle: "ridge", padding: "5px" }}>
                  <img
                    src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Image"
                    width="300px"
                    height="200px"
                  />
                  <h4>Apple Inc. (AAPL)</h4>
                  <p>discription about job will be written here</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      <NavLink
                        to="/profile/doc"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <button
                          className="btn btn-success"
                          style={{ width: "100%" }}
                          type="button"
                        >
                          Apply
                        </button>
                      </NavLink>
                    </button>
                  </div>{" "}
                </div>
                <div style={{ borderStyle: "ridge", padding: "5px" }}>
                  <img
                    src="https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Image"
                    width="300px"
                    height="200px"
                  />
                  <h4>Google</h4>
                  <p>discription about job will be written here</p>
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      <NavLink
                        to="/profile/doc"
                        style={{
                          color: "white",
                          textDecoration: "none",
                        }}
                      >
                        <button
                          className="btn btn-success"
                          style={{ width: "100%" }}
                          type="button"
                        >
                          Apply
                        </button>
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-outline-primary mt-4" type="button">
                  Next page
                </button>
              </div>
            </div>
          </div>
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossOrigin="anonymous"
        ></script>
      </div>
    </>
  );
}

export default Profile;
