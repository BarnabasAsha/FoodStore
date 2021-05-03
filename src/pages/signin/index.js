import React from 'react'
import google from '../../assets/images/google.png'

const Signin = () => {
    return (
        <div className="signup_wrapper">
            <div className="signup">
                <h2 className="second-level-heading">Login</h2>
                <button className="btn btn_xl btn_grey">
                    <span className="signup_img"><img src={google} alt="" /></span>
                    Login with Google
                    </button>
                <form>
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" required/>
                    </div>
                    <button type="submit" className="btn btn_light btn_xl">Login</button>
                    <div>Don't have an account? <a className="alt_cta" href="/signup">Create account</a></div>
                </form>
            </div>
        </div>
    )
}

export default Signin;