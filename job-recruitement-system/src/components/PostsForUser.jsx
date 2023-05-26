import { useEffect, useState } from "react";
import axios from "axios";
import Job from "./Job";

function PostsForUser() {
  const [searchData, setSearchData] = useState(null);
  const [dbJobs, setDbJobs] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:4000/posts/getPosts", {
        searchData: searchData,
      })
      .then(function (response) {
        setDbJobs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div
      className="d-flex"
      style={{ marginTop: "5%", backgroundColor: "black" }}
    >
      {dbJobs ? (
        dbJobs.map((job) => {
          return <Job key={job.id} jobData={job} />;
        })
      ) : (
        <h1 style={{ color: "white", paddingLeft: "40%", marginTop: "10%" }}>
          Loading...
        </h1>
      )}
    </div>
  );
}

export default PostsForUser;
