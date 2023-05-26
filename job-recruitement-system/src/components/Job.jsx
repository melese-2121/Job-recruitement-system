import { NavLink } from "react-router-dom";

function Job({ jobData }) {
  return (
    <div
      style={{
        marginLeft: "0.3%",
        marginRight: "0.3%",
      }}
    >
      <div
        style={{ borderStyle: "ridge", padding: "5px", borderRadius: "10px" }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/colorful-acrylic-ink-water-isolated-white-abstract-background-color-explosion-liquid-cloud-motion-91873826.jpg"
          alt="Image"
          width="100%"
          height="100%"
          style={{ borderRadius: "5px" }}
        />
        <h5
          style={{
            marginTop: "20px",
            color: "white",
            marginLeft: "5px",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {jobData.title}
        </h5>

        <p style={{ paddingLeft: "15px", color: "wheat", fontStyle: "italic" }}>
          - {jobData.description}
        </p>
        <div className="d-grid gap-2 ">
          <NavLink
            className="mt-5 mb-1 ml-1 mr-1"
            to="/profile/doc"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            <button
              className="btn btn-outline-success"
              style={{ width: "100%" }}
              type="button"
            >
              Apply
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Job;
