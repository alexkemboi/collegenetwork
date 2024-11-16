"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components';


 
const Signup: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const handleSignup = (e: React.FormEvent) => {
      e.preventDefault();
      // Implement login logic here (e.g., API call)
      console.log("Sign up successful with", { email, password });
    };


  return (
    <StyledWrapper>
    <form className="form">
        <p className="title">MASOMO LIBRARY MANAGEMENT SYSTEM </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input className="input" type="text" placeholder='First Name' />
          </label>
          <label>
            <input className="input" type="text" placeholder='Last Name' />
          </label>
        </div>  
        <label>
          <input className="input" type="email" placeholder='Email' />
        </label> 
        <label>
          <input className="input" type="password" placeholder='Password' />
        </label>
        <label>
          <input className="input" type="password" placeholder='Confirm Password' />
        </label>
        <button className="submit">Submit</button>
        <p className="signin">Already have an account ? <Link href="/">Login</Link> </p>
    </form>
    </StyledWrapper>
    
  )
}


const StyledWrapper = styled.div`

  height: 100vh;
  display: flex;
  justify-content: flex-end; 
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50vw; /* Form will take up 50% of the screen width */
    height: 100vh; /* Form will fill the entire height */
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #fff; /* White background */
    color: #333; /* Dark text for readability */
    border: 1px solid #ccc; /* Light border */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1); /* Optional shadow for better visibility */
  }

.title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  

  .message,
  .signin {
    font-size: 14.5px;
    color: rgba(0, 0, 0, 0.7); /* Darker color for better readability */
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #f9f9f9; /* Lighter input background */
    color: #333; /* Dark text */
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;


export default Signup






// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom'; // Import for routing, if needed

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
  
//   const [error, setError] = useState('');
  
//   const history = useHistory(); // Used for navigating to login page

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     setError('');
//     // Handle form submission logic here, like sending data to the server
//     console.log('Form submitted:', formData);
//     // Redirect to login page after successful sign-up
//     history.push('/login');
//   };

//   return (
//     <div className="sign-up-container">
//       <h2>Create an Account</h2>
//       <form onSubmit={handleSubmit} className="sign-up-form">
//         <div className="form-group">
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {error && <p className="error">{error}</p>}

//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>

//       <div className="login-link">
//         <p>
//           Already have an account?{' '}
//           <a href="/login" className="login-link">Login</a>
//         </p>
//       </div>
//     </div>
//   );
// };


