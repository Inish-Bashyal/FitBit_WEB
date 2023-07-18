import "./addWorkout.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/single.png";


export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src={pic} alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Name of Workout" 
            type="text" 
            className="writeInput writeText">
            </textarea>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Number of Reps" 
            type="text" 
            className="writeInput writeText">
            </textarea>
        </div>

        <div className="writeFormGroup">
            <textarea placeholder="Day" 
            type="text" 
            className="writeInput writeText">
            </textarea>
        </div>
        <button className="writeSubmit">Add Workout</button>
      </form>
      <br />
    </div>
  )
}