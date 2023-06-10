const SignUp = ()=>{
    return(
        <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" required/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" required/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <button  className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="social-icon">
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

export default SignUp;