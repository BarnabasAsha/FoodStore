import React from 'react'
import './signup.css'
import google from '../../assets/images/google.png'

const Signup = () => {
    return (
        <div className="signup_wrapper">
            <div className="signup">
                <h2 className="second-level-heading">Create Account</h2>
                <button className="btn btn_xl btn_grey">
                    <span className="signup_img"><img src={google} alt="" /></span>
                    Signup with Google
                    </button>
                <form>
                    <div className="form_group">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Enter Fullname" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" required/>
                    </div>
                    <button type="submit" className="btn btn_light btn_xl">Create Account</button>
                    <div>Already have an account? <a className="alt_cta" href="/login">Login</a></div>
                </form>
            </div>
        </div>
    )
}

export default Signup