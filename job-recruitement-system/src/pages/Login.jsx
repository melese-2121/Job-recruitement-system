import { Container } from "react-bootstrap";
import "../css/Login.css";

function Login() {
  return (
    <Container fluid>
      <div className="row content">
        <div className="col-md-6">
          <img
            src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
            alt="Login"
            width="100px"
            height="100px"
            style={{
              marginLeft: "60%",
              marginBottom: "0%",
              borderRadius: "50px",
            }}
          />
        </div>
        <form>
          <div className="form-group mb-4">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group form-check mb-2 mt-2">
            <input
              type="checkbox"
              name="checkbox"
              style={{ cursor: "pointer" }}
              className="form-check-input"
              id="checkbox"
            />
            <label className="form-check-label" type="checkbox">
              Remember Me
            </label>
          </div>
          <button
            className="btn btn-outline-success mt-1"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
}

export default Login;
