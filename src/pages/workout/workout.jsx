import React from 'react';
import { Link } from "react-router-dom";
import Posts from '../../components/posts/posts';
import "./workout.css";


export default function Workout() {
    return (
      <div className="workoutContainer">
        <button className="WorkoutButton" type="button">
        <Link className="link" to="/addWorkout"> Add Workout</Link>


        </button>
        <Posts />
      </div>
    )
  }