const PanelContainer = (props) =>{
    return(
        <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Find new fast interesting news feeds.
              Connect, share, thrive.
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={props.handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Find new fast interesting news feeds.
              Connect, share, thrive.
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={props.handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    )
}

export default PanelContainer