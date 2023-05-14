import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="bg-image vh-100 heading">
      <div
        className="mask"
        style={{
          height: "100%",
          marginTop: "1px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100 pt-1">
          <Container
            className="text-white text-center"
            style={{ width: "200%", marginBottom: "15%" }}
            fluid
          >
            <h1 className="mb-3 heading-title">
              Join us and contact companies to get a job!
            </h1>
            <p
              className="mb-4"
              style={{
                fontFamily: "Gabriola",
                fontSize: "25px",
                color: "black",
              }}
            >
              In this website job seeker will contact to companies and get job
              by providing information about them.
            </p>
            <Link to="#">
              <Button
                variant="text-white mt-3 fw-bold px-5 fs-5 rounded-pill"
                style={{
                  backgroundColor: `rgb(0, 156, 55)`,
                }}
              >
                Create Account
              </Button>
            </Link>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Heading;
