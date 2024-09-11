import React, { useState } from 'react';
import './styles/Signup.css';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let validationErrors = {};
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
        console.log('Form data submitted:', formData);
        setErrors({});
        // Here you would typically handle the form submission, e.g., sending data to a server
        fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                navigate('/', { state: { username: formData.username } }); // Redirect to the home page
            }
        })
        .catch(error => console.error('Error:', error));  
    }
  };

  return (
    <div className="signup-bg">
    <form onSubmit={handleSubmit} className="signup">
        <div>
            <header>
                <h1>Singup Page</h1>
            </header>
        </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Signup;

