import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./addWorkout.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/single.png";

export default function Write() {
  const [workoutData, setWorkoutData] = useState({
    title: "",
    nameOfWorkout: "",
    numberOfReps: "",
    day: "",
    image: null, // Store the selected image file here
  });

  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image file

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if all required fields are filled
      if (!workoutData.title || !workoutData.nameOfWorkout || !workoutData.numberOfReps || !workoutData.day || !workoutData.image) {
        alert("Please fill in all the required fields.");
        return;
      }

      // Get the bearer token from local storage
      const token = window.localStorage.getItem('token');

      const formData = new FormData();
      formData.append("title", workoutData.title);
      formData.append("nameOfWorkout", workoutData.nameOfWorkout);
      formData.append("numberOfReps", workoutData.numberOfReps);
      formData.append("day", workoutData.day);
      formData.append("image", workoutData.image); // Append the image file to the formData

      // Send a POST request to the API with the formData and the bearer token in the headers
      const response = await axios.post('http://localhost:3001/workouts/addWorkout', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the appropriate content type
          'Authorization': `Bearer ${token}`, // Include the bearer token in the Authorization header
        },
      });
      console.log(response.data); // Log the response from the API
      // Optionally, you can show a success message to the user here
      // Redirect to the dashboard or other appropriate page after adding the workout
      navigate('/dashboard');
    } catch (error) {
      console.error("Error adding workout:", error.response.data);
      // Optionally, you can show an error message to the user here
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setWorkoutData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
    setSelectedImage(URL.createObjectURL(imageFile)); // Update the selected image in state
  };

  return (
    <div className="write">
      <img className="writeImg" src={selectedImage || pic} alt="" /> {/* Use the selected image if available, else use the default image */}
      <form className="writeForm" onSubmit={handleFormSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="writeInput"
            autoFocus={true}
            value={workoutData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Name of Workout"
            name="nameOfWorkout"
            type="text"
            className="writeInput writeText"
            value={workoutData.nameOfWorkout}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Number of Reps"
            name="numberOfReps"
            type="text"
            className="writeInput writeText"
            value={workoutData.numberOfReps}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <textarea
            placeholder="Day"
            name="day"
            type="text"
            className="writeInput writeText"
            value={workoutData.day}
            onChange={handleInputChange}
          />
        </div>

        <button className="writeSubmit" type="submit" onClick={handleFormSubmit}>
          Add Workout
        </button>
      </form>
      <br />
    </div>
  );
}
