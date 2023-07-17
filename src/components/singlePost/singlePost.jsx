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
        This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital. This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital. This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital. This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital. This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital. This photo consists of a tree. It is a bright day with beautiful blue sky. There are car parked too around the trees. 
        So we can assumate that it is a parking lot. Also there is are small houses which I assume can be laboratories of the hospital. 
        As there is an ambulance too, so it is probably the hospital.
        </p>
      </div>
    </div>
  )
}