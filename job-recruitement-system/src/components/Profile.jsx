import PostsForUser from "./PostsForUser";
import "../css/Profile.css";
import { Container } from "react-bootstrap";
import ProfileAside from "./ProfileAside";

function Profile() {
  return (
    <div>
      <ProfileAside />
      <PostsForUser />
    </div>
  );
}

export default Profile;
