import "./addWorkout.css";

export default function AddWorkout() {
    return (
        <div className="formContainer">
          <form className="form">
            <label>
              Title:
              <input type="text" className="formInput" />
            </label>
            <br />
            <label>
              Name of Workout:
              <input type="text" className="formInput" />
            </label>
            <br />
            <label>
              Number of Reps:
              <input type="number" className="formInput" />
            </label>
            <br />
            <label>
              Day:
              <input type="text" className="formInput" />
            </label>
            <br />
         <div className="uploadContainer">
          <input type="file" className="uploadInput" id="uploadInput" />
          <label htmlFor="uploadInput" className="uploadLabel">
          <i className="uploadIcon fa-regular fa-upload"></i>
                      Upload Image
          </label>
        </div>
            <br />
            <button className="addWorkoutButton" type="button">
              Add Workout
            </button>
          </form>
        </div>
      );
    }