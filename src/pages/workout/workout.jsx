import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './workout.css';

export default function Workout() {
  const [searchQuery, setSearchQuery] = useState('');

  const [workoutData, setWorkoutData] = useState(null);

  useEffect(() => {
    // Function to fetch workout data
    const fetchWorkoutData = async () => {
      try {
        // Get the bearer token from local storage
        const token = localStorage.getItem('token');

        // Set the request headers with the bearer token
        const headers = {
          'Authorization': `Bearer ${token}`,
        };

        // Make the API call with the headers
        const response = await axios.get('http://localhost:3001/workouts/getAllWorkouts', { headers });
        setWorkoutData(response.data.data);
      } catch (error) {
        console.error('Error fetching workout data:', error);
      }
    };

    fetchWorkoutData();
  }, []);

  // Function to handle changes in the search input field
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="workoutContainer">
      <div className="searchBar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search workouts..."
        />
      </div>

      <button className="WorkoutButton" type="button">
        <Link className="link" to="/addWorkout">
          Add Workout
        </Link>
      </button>

      {workoutData && workoutData.map((workout) => (
        <Link key={workout._id} className="link" to={`/post/${workout._id}`}>
          <div className="post">
            <img
              className="postImg"
              crossOrigin='anonymous'
              src={`http://localhost:3001/uploads/${workout.image}`} // Use the API URL for the image
              alt=""
            />
            <div className="postInfo">
              <div className="postCats">
                <span className="postCat">{workout.nameOfWorkout}</span>
              </div>

              <span className="postTitle">
                {workout.title}
              </span>
              <hr />
              <span className="postDate">1 hr ago</span>
            </div>
            <p className="postDesc">
              {workout.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
