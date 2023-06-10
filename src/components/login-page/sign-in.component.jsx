import React from 'react';

const SignIn = () =>{

    return(
        <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" placeholder="Username" required/>
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" placeholder="Password" required/>
        </div>
        <input type="submit" value="Login" className="btn solid" />
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <button className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button  className="social-icon">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-google"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </form>
    )
}

export default SignIn