import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import Tesseract from "tesseract.js";
import { Formik, Form, Field } from "formik";

function Job({ jobData, index, username }) {
  const [org, setOrg] = useState({});
  const [document, setDocument] = useState({
    username: username,
    orgId: org.id,
    departement: "Other",
    cgpa: "",
    infoText: "No info added.",
  });
  const [image1, setImage1] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [succesMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .post("http://localhost:4000/org/findOrg", { PK: jobData.OrgId })
      .then((response) => {
        setOrg(response.data.org);
        setDocument({ ...document, orgId: response.data.org.id });
      })
      .catch((err) => {
        navigate(`/profile/${username}`);
      });
  }, []);

  //Handle submision fo form data
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    Tesseract.recognize(image1, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .then((result) => {
        console.log(jobData);
        console.log(document.departement);
        if (
          (document.cgpa > 0) &
          (document.min_cgpa <= 4) &
          (document.cgpa >= jobData.min_cgpa) &
          (document.departement.toUpperCase() ===
            jobData.departement.toUpperCase())
        ) {
          axios
            .post("http://localhost:4000/worker_org/add_worker_org", {
              username: username,
              orgId: document.orgId,
              cv: result.data.text,
              why_apply_info: document.infoText,
            })
            .then((response) => {
              setSuccess(true);
              setSuccessMsg(
                `Congratulation!!! you are accepted to work with ${org.name}. You can contact them with address provided below for more information.`
              );
            })
            .catch((err) => {
              navigate(`/profile/${username}`);
            });
        } else {
          navigate(`/profile/${username}`);
          setErrMsg("Request is not successfull");
        }
      })
      .catch((err) => {
        setErrMsg(
          "Error occured while reading image, please provide clear image"
        );
        navigate(`/profile/${username}`);
      });

    console.log(text);
  };

  return (
    <div
      style={{
        marginLeft: "0.3%",
        marginRight: "0.3%",
        width: "19.4%",
        marginTop: "10px",
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
          {org.name}
        </h5>

        <p style={{ paddingLeft: "15px", color: "wheat", fontStyle: "italic" }}>
          - {jobData.title}
        </p>
        <div className="d-grid gap-2 ">
          <button
            className="btn btn-outline-success"
            style={{ width: "100%" }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Apply
          </button>
          <div
            className="modal fade bg-dark text-bg-dark"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog bg-dark modal-fullscreen-xxl-down">
              <div className="modal-content">
                <div className="modal-body bg-dark">
                  <div
                    style={{
                      marginTop: "2%",
                      marginBottom: "2%",
                      backgroundColor: "dark",
                      color: "white",
                    }}
                  >
                    {isLoading && (
                      <>
                        <p
                          className="text-center py-3 mt-1"
                          style={{
                            color: "green",
                            fontSize: "30px",
                            fontWeight: "bold",
                            fontStyle: "italic",
                          }}
                        >
                          Wait the response{" "}
                          <span style={{ color: "white" }}> {progress} </span>%
                        </p>
                        {/* <progress
                          value={progress}
                          max="100"
                          style={{ marginLeft: "35%", width: "400px" }}
                        >
                          {progress}%
                        </progress> */}
                      </>
                    )}
                    {!isLoading && !text && (
                      <div className="d-flex justify-content-around">
                        <div style={{ width: "70%" }}>
                          <Formik>
                            <Form onSubmit={handleSubmit}>
                              <div className="form-group ">
                                <label htmlFor="departement">
                                  Departement:
                                </label>
                                <Field
                                  component="select"
                                  id="departement"
                                  onChange={(e) =>
                                    setDocument({
                                      ...document,
                                      departement: e.target.value,
                                    })
                                  }
                                  name="departement"
                                  className="form-select"
                                  aria-label="Health Care"
                                  style={{ boxShadow: "none", width: "100%" }}
                                >
                                  <option>Other</option>
                                  <option>Health care</option>
                                  <option>Computer science</option>
                                  <option>Engineering</option>
                                  <option>Politics</option>
                                </Field>
                              </div>
                              <div style={{ marginTop: "8%" }}>
                                <div>
                                  <label htmlFor="CV" className="form-label">
                                    Upload your CV
                                  </label>
                                  <Field
                                    className="form-control form-control-md"
                                    style={{
                                      borderRadius: "10px",
                                      fontSize: "20px",
                                      paddingLeft: "5px",
                                    }}
                                    id="CV"
                                    onChange={(e) => {
                                      setImage1(
                                        URL.createObjectURL(e.target.files[0])
                                      );
                                    }}
                                    type="file"
                                    required
                                  />
                                </div>
                              </div>
                              <div style={{ marginTop: "8%" }}>
                                <label
                                  htmlFor="cgpa"
                                  style={{ color: "white" }}
                                >
                                  Your CGPA result in number
                                </label>
                                <Field
                                  id="cgpa"
                                  type="number"
                                  required
                                  style={{
                                    fontSize: "20px",
                                    borderRadius: "10px",
                                    paddingLeft: "10px",
                                  }}
                                  onChange={(e) =>
                                    setDocument({
                                      ...document,
                                      cgpa: e.target.value,
                                    })
                                  }
                                  className="form-control"
                                />
                              </div>
                              <div style={{ marginTop: "8%" }}>
                                <label
                                  htmlFor="experience"
                                  style={{ color: "white" }}
                                >
                                  Have Experience? If Have, Give Us Your
                                  Certeficate.
                                </label>
                                <Field
                                  style={{
                                    fontSize: "20px",
                                    borderRadius: "10px",
                                    paddingLeft: "10px",
                                  }}
                                  id="experience"
                                  type="file"
                                  onChange={(e) =>
                                    setDocument({
                                      ...document,
                                      experience: URL.createObjectURL(
                                        e.target.files[0]
                                      ),
                                    })
                                  }
                                  className="form-control"
                                />
                              </div>
                              <div style={{ marginTop: "8%" }}>
                                <label
                                  htmlFor="reason"
                                  style={{ color: "white" }}
                                >
                                  Why Apply For The Job?
                                </label>
                                <textarea
                                  name="reason"
                                  id="reason"
                                  cols="30"
                                  rows="4"
                                  onChange={(e) =>
                                    setDocument({
                                      ...document,
                                      infoText: e.target.value,
                                    })
                                  }
                                  style={{
                                    width: "100%",
                                    paddingLeft: "10px",
                                    paddingTop: "5px",
                                    borderRadius: "10px",
                                  }}
                                ></textarea>
                              </div>
                              <button
                                type="submit"
                                className="btn btn-outline-primary mt-3 mb-5"
                                style={{ width: "100%" }}
                              >
                                GO
                              </button>
                            </Form>
                          </Formik>
                        </div>
                        <div>
                          <div
                            className="card"
                            style={{
                              width: "80%",
                              height: "550px",
                              marginTop: "30px",
                              marginRight: "5%",
                            }}
                          >
                            <img
                              className="card-img-top"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwAKKF8Rfk9FadsGqyKSuzB0s9Lyv-fBF7w&usqp=CAU"
                              alt="Google image"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{org.name}</h5>
                              <p className="card-text">
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                              </p>
                              <a href="#" className="btn btn-primary">
                                Go somewhere
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <p style={{ color: "red", textAlign: "center" }}>
                        {errMsg && errMsg}
                      </p>
                      <p style={{ color: "green", textAlign: "center" }}>
                        {succesMsg && succesMsg}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-dark d-flex justify-content-end"
                  style={{ paddingRight: "10%", paddingBottom: "20px" }}
                >
                  <button
                    type="button"
                    className="btn btn-outline-primary text-white"
                    data-bs-dismiss="modal"
                  >
                    <BiArrowBack style={{ fontSize: "25px" }} /> Back Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
