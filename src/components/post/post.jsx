import { Link } from "react-router-dom";
import "./post.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/post.jpeg";

export default function Post() {
  return (
    <Link className="link" to="/post">
    <div className="post">
      <img className="postImg"
      src={pic}
      alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Travel</span>
          <span className="postCat">Life</span>
        </div>

        <span className="postTitle">
          A photo of a tree
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital.
      </p>
    </div>
    </Link>
  )
}