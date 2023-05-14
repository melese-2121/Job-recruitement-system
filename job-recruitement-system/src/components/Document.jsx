import { useState } from "react";
import Tesseract from "tesseract.js";
import { Formik, Form, Field } from "formik";

function Requirements() {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [experience, setExperienceImage] = useState("");
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [grade, setGrade] = useState(0);

  const handleSubmit = (e) => {
    setIsLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        setText(result.data.text);
        console.log(result.data.text);
      });
  };

  return (
    <div
      className="container col-md-5 mx-auto d-flex flex-column justify-content-center "
      style={{
        border: "1px solid black",
        marginTop: "2%",
        marginBottom: "2%",
        backgroundColor: "ButtonFace",
      }}
    >
      {!isLoading && (
        <h5
          style={{
            color: "blue",
            marginTop: "3 %",
            marginLeft: "10%",
            marginBottom: "10%",
            fontWeight: "bold",
          }}
        >
          Fill The Required Form Data From Below
        </h5>
      )}
      {isLoading && (
        <>
          <progress className="form-control" value={progress} max="100">
            {progress}%{" "}
          </progress>{" "}
          <p className="text-center py-0 my-0">Converting:- {progress} %</p>
        </>
      )}
      {!isLoading && !text && (
        <Formik>
          <Form onSubmit={handleSubmit}>
            <div
              className="form-group col-md-4 d-flex justify-content-between"
              style={{ width: "80%" }}
            >
              <label htmlFor="inputState" style={{ color: "blue" }}>
                Departement:{" "}
              </label>
              <select className="form-control" style={{ marginLeft: "10%" }}>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Politics</option>
              </select>
            </div>
            <div style={{ marginTop: "8%" }}>
              <label htmlFor="gradeImage" style={{ color: "blue" }}>
                Please Provide Image That Contains CGPA And SGPA Result.
              </label>
              <Field
                type="file"
                id="gradeImage"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control"
              />
            </div>
            <div style={{ marginTop: "8%" }}>
              <label htmlFor="grade" style={{ color: "blue" }}>
                Your CGPA result in number
              </label>
              <Field
                id="grade"
                type="number"
                onChange={(e) => setGrade(e.target.value)}
                className="form-control"
              />
            </div>
            <div style={{ marginTop: "8%" }}>
              <label htmlFor="experience" style={{ color: "blue" }}>
                Have Experience? If Have, Give Us Your Certeficate.
              </label>
              <Field
                id="experience"
                type="file"
                onChange={(e) =>
                  setExperienceImage(URL.createObjectURL(e.target.files[0]))
                }
                className="form-control"
              />
            </div>
            <div style={{ marginTop: "8%" }}>
              <label htmlFor="reason" style={{ color: "blue" }}>
                Why Apply For The Job?
              </label>
              <textarea
                name="reason"
                id="reason"
                cols="30"
                rows="4"
                style={{ width: "100%" }}
              ></textarea>
            </div>
            <div>
              <Field
                type="submit"
                className="btn btn-primary mt-3 mb-2"
                value="Submit"
                style={{ width: "100%" }}
              />
            </div>
          </Form>
        </Formik>
      )}

      <div>{text && text}</div>
    </div>
  );
}

export default Requirements;
