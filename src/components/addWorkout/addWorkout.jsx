import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./addWorkout.css";
import pic from "/Users/inishbashyal/Documents/FitBit_web/frontend/fitbit/src/assets/images/single.png";

export default function AddWorkout() {
  const [workoutData, setWorkoutData] = useState({
    title: "",
    nameOfWorkout: "",
    numberOfReps: "",
    day: "",
    image: null,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePicture", workoutData.image);
      const response = await axios.post('http://localhost:3001/workouts/uploadImage', formData);
      setWorkoutData((prevData) => ({
        ...prevData,
        image: response.data.data, // Use the filename obtained from the response
      }));
      console.log("Image uploaded successfully:", response.data.data);
    } catch (error) {
      console.error("Error uploading image:", error.response.data);
    }
  };

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

      // Make the POST request to add the workout
      const response = await axios.post('http://localhost:3001/workouts/addWorkout', workoutData, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error adding workout:", error.response.data);
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
      <img className="writeImg" src={selectedImage || pic} alt="" />
      <form className="writeForm" onSubmit={handleFormSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            name="image"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <button onClick={handleImageUpload}>Upload Image</button>
        </div>

        <div className="writeFormGroup">
          <input
            placeholder="Title"
            name="title"
            type="text"
            className="writeInput"
            autoFocus={true}
            value={workoutData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <input
            placeholder="Name of Workout"
            name="nameOfWorkout"
            type="text"
            className="writeInput writeText"
            value={workoutData.nameOfWorkout}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <input
            placeholder="Number of Reps"
            name="numberOfReps"
            type="text"
            className="writeInput writeText"
            value={workoutData.numberOfReps}
            onChange={handleInputChange}
          />
        </div>

        <div className="writeFormGroup">
          <input
            placeholder="Day"
            name="day"
            type="text"
            className="writeInput writeText"
            value={workoutData.day}
            onChange={handleInputChange}
          />
        </div>

        <button className="writeSubmit" type="submit">
          Add Workout
        </button>
      </form>
      <br />
    </div>
  );
}
