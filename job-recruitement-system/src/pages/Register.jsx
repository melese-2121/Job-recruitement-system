import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Login from "./Login";
import { NavLink } from "react-bootstrap";

function Register() {
  // States
  const [showLogin, setShowLogin] = useState(false);

  // Styling icons
  const iconStyles = {
    fontSize: "22px",
    marginRight: "30px",
    marginTop: "20px",
    marginBottom: "20px",
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black mt-3">
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="15"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <h4 classNAme="text-center h1 fw-bold mb-1 mx-1 mx-md-2 mt-4">
                Sign up
              </h4>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <FaUserAlt style={iconStyles} />
                <MDBInput
                  placeholder="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <TfiEmail style={iconStyles} />
                <MDBInput placeholder="Your Email" id="form2" type="email" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <RiLockPasswordFill style={iconStyles} />
                <MDBInput placeholder="Password" id="form3" type="password" />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <FaKey style={iconStyles} />
                <MDBInput
                  placeholder="Repeat your password"
                  id="form4"
                  type="password"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <div>
                <MDBBtn
                  className="mb-4"
                  style={{
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "green",
                  }}
                >
                  Register
                </MDBBtn>
                <p>
                  Have already an account?{" "}
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setShowLogin(!showLogin);
                    }}
                  >
                    <Link>Sign in</Link>
                  </a>{" "}
                </p>

                <p>
                  <Link to="/">Home</Link>
                </p>
              </div>
            </MDBCol>
            {showLogin && (
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
            )}
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
