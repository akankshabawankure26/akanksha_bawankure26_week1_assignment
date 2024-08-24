import React, { useState } from 'react';
import './FeedBackform.css';
import { useNavigate } from 'react-router-dom';


function FeedBackForm() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    rating: "",
    comments: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Access the form data from the state
    console.log('Form data:', user);

    navigate('/displayInfo', { state: { user } });

  };

  return (
    <>
      <div className="form-container">
        <h1>Customer Feedback Form</h1>
        <form action="#" onSubmit={handleSubmit}>

          <div className="form-group">
            <label for="name">Customer Name:</label>
            <input type="text" id="name" name="name"
              value={user.name}
              onChange={handleChange}
              required />
          </div>

          <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"
              value={user.email}
              onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Rating (1 to 5 stars):</label>
            <div class="rating">
              <input type="radio" id="star1" name="rating" value={"★"}
                onChange={handleChange} required />
              <label for="star1" >★</label>

              <input type="radio" id="star2" name="rating" value={"★★"}
                onChange={handleChange} />
              <label for="star2" >★</label>

              <input type="radio" id="star3" name="rating" value={"★★★"}
                onChange={handleChange} />
              <label for="star3">★</label>

              <input type="radio" id="star4" name="rating" value={"★★★★"}
                onChange={handleChange} />
              <label for="star4" >★</label>

              <input type="radio" id="star5" name="rating" value={"★★★★★"}
                onChange={handleChange} />
              <label for="star5" >★</label>
            </div>
          </div>

          <div className="form-group">
            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments" value={user.comments}
              onChange={handleChange} required ></textarea>
          </div>

          <button type="submit" className='btn btn-primary'>Submit Feedback</button>
        </form>

      </div>

    </>
  )
}
export default FeedBackForm;