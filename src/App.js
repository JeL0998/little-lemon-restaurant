import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for styling

function App() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem('bookingData', JSON.stringify(data));
    alert('Your table booking has been successfully submitted!');
    reset();
  };

  return (
    <div className="App">
      <header className="bg-primary py-5 text-light text-center">
        <div className="container">
          <h1 className="mb-4">Little Lemon Restaurant</h1>
          <p className="lead">Book your table now!</p>
        </div>
      </header>
      <div className="container mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light p-4 rounded shadow-lg">
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <div className="input-group">
              <span className="input-group-text"><FaUser /></span>
              <input type="text" {...register("name", { required: true })} className="form-control" />
            </div>
            {errors.name && <span className="text-danger">Name is required</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <div className="input-group">
              <span className="input-group-text">@</span>
              <input type="email" {...register("email", { required: true })} className="form-control" />
            </div>
            {errors.email && <span className="text-danger">Email is required</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Date:</label>
            <div className="input-group">
              <span className="input-group-text"><FaCalendarAlt /></span>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Time:</label>
            <div className="input-group">
              <span className="input-group-text"><FaClock /></span>
              <input type="time" {...register("time", { required: true })} className="form-control" />
            </div>
            {errors.time && <span className="text-danger">Time is required</span>}
          </div>
          <div className="mb-3">
            <label className="form-label">Party Size:</label>
            <div className="input-group">
              <span className="input-group-text"><FaUser /></span>
              <input type="number" {...register("partySize", { required: true })} className="form-control" />
            </div>
            {errors.partySize && <span className="text-danger">Party Size is required</span>}
          </div>
          <button type="submit" className="btn btn-primary">Book Table</button>
        </form>
      </div>
      <footer className="bg-dark text-light py-4 mt-4">
        <div className="container text-center">
          <p>Contact: info@littlelemonrestaurant.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
