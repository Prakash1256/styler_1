import React, { useState } from 'react';
import Swal from 'sweetalert2';


const SignupLoginPage = () => {
  const [isSignup, setIsSignup] = useState(false); 
  const [otp, setOtp] = useState(''); 
  const [otpModalVisible, setOtpModalVisible] = useState(false); 

  // Form Fields State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Handles form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      try {
        const response = await fetch(`https://long-blue-pronghorn-hat.cyclic.app/user/OTP?email=${email}`);
        const otpRes = await response.json();

        if (otpRes.msg === "Email already registered") {
          Swal.fire("You Are Already Registered");
        } else {
          setOtpModalVisible(true);
        }
      } catch (error) {
        Swal.fire("An error occurred. Please try again later.");
      }
    } else {
      try {
        const response = await fetch('https://long-blue-pronghorn-hat.cyclic.app/user/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const loginRes = await response.json();

        if (loginRes.msg === "Login successful") {
          Swal.fire("Login Successful");
        } else {
          Swal.fire("Login Failed");
        }
      } catch (error) {
        Swal.fire("An error occurred. Please try again later.");
      }
    }
  };

  const handleOtpSubmit = async () => {
    Swal.fire("OTP Submitted");
    setOtpModalVisible(false);
  };

  return (
    <>
        <h1 className='admin'>For Admin Only</h1>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="https://images.news18.com/ibnlive/uploads/2022/11/001-10-1-16678274233x2.png?impolicy=website&width=510&height=356" alt="Cover" />
            <div className="text">
              <span className="text-1">Every new friend is a <br /> new adventure</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            {/* we can add content for the back side here */}
          </div>
        </div>

        {/* Forms Section */}
        <div className="forms">
          <div className="form-content">
            <div className={isSignup ? 'signup-form' : 'login-form'}>
              <div className="title">{isSignup ? 'Signup' : 'Login'}</div>
              <form onSubmit={handleFormSubmit}>
                {isSignup && (
                  <>
                    <div className="input-box">
                      <label htmlFor="name" className="icon-label">
                        <i className="fas fa-user"></i>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-box">
                      <label htmlFor="phone" className="icon-label">
                        <i className="fas fa-phone"></i>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}
                <div className="input-box">
                  <label htmlFor="email" className="icon-label">
                    <i className="fas fa-envelope"></i>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="password" className="icon-label">
                    <i className="fas fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {!isSignup && (
                  <div className="forgot-password">
                    <a href="/forgot-password">Forgot password?</a>
                  </div>
                )}
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  {isSignup ? (
                    <>
                      Already have an account? <span onClick={() => setIsSignup(false)} style={{ color: 'blue', cursor: 'pointer' }}>Login now</span>
                    </>
                  ) : (
                    <>
                      Don't have an account? <span onClick={() => setIsSignup(true)} style={{ color: 'blue', cursor: 'pointer' }}>Signup now</span>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      {otpModalVisible && (
        <div className="modal" id="otpModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter OTP</h5>
                <button type="button" className="close" onClick={() => setOtpModalVisible(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setOtpModalVisible(false)}>
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleOtpSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupLoginPage;
