import React from 'react';
import './DisplayFeedback.css';
import { useLocation } from 'react-router-dom';


function DisplayUserFeedback() {
  const location = useLocation(); // Access the location object
  const { user } = location.state || {};
  return (
    <div className='container'>
      <h1>Thank you for your Feedback</h1>
      <h2>Your Feedback is as Follow - : </h2>
      <br/>
      <div className='feedback-container'>
        <h3>Name -: {user.name} </h3>
        <h3>Email -: {user.email}</h3>
        <h3>Rating -: {user.rating} </h3> 
        <h3>Your Comments -: {user.comments} </h3>
      </div>
    </div>
  )
}

export default DisplayUserFeedback