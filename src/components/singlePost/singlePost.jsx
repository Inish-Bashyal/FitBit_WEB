import "./singlePost.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/post.jpeg";


export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className="singlePostImg"
        src={pic}
        alt=""
        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Inish Bashyal</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
        Title
        <br />
        Name of Workout
        <br />
        Number of Reps
        <br />
        Day
        </p>
      </div>
      <button className="workoutFollow">Follow</button>
      <button className="back">Get Back</button>
    </div>
  )
}