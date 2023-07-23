import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../../components/posts/posts';
import Topbar from '../../components/topbar/topbar';
import './workout.css';

export default function Workout() {
  const [searchQuery, setSearchQuery] = useState('');



  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
    <Topbar />
    <div className="workoutContainers">
      <div className="searchBar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search workouts..." />
      </div>

      <button className="WorkoutButton" type="button">
        <Link className="link" to="/addWorkout">
          Add Workout
        </Link>
      </button>

      <Posts />
    </div></>
  );
}
