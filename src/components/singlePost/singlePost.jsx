import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook
import './singlePost.css';

export default function PostDetails() {
  const { postId } = useParams(); // Access the postId using the useParams hook
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch post data
    const fetchPostData = async () => {
      try {
        // Get the bearer token from local storage
        const token = localStorage.getItem('token');

        // Set the request headers with the bearer token
        const headers = {
          'Authorization': `Bearer ${token}`,
        };

        // Fetch workout data by postId
        const workoutResponse = await axios.get(`http://localhost:3001/workouts/getWorkout/${postId}`, { headers });

        // Assuming the response contains the workout details, extract image and title
        const workoutData = workoutResponse.data.data;
        const workoutImage = workoutData.image;
        const workoutTitle = workoutData.title;
        const workoutName = workoutData.nameOfWorkout;
        const workoutReps = workoutData.numberOfReps;
        const workoutDay = workoutData.day;

        // Set the workout image and title in the state
        setPost({ image: workoutImage, title: workoutTitle , nameOfWorkout : workoutName, numberOfReps : workoutReps,
        day : workoutDay
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post data:', error);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img className="singlePostImg"
          crossOrigin='anonymous'
          src={`http://localhost:3001/uploads/${post.image}`} // Use the API URL for the image
          alt="" />
        <h1 className="singlePostTitle">
          {post.title}

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
          Name of Workout : {post.nameOfWorkout}
          <br />
          Number of Reps : {post.numberOfReps}
          <br />
          Day : {post.day}
        </p>
      </div>
      <button className="workoutFollow">Follow</button>
      <button className="back">
       <Link to='/workout' >Get Back</Link> 
        </button>
    </div>
  )
}