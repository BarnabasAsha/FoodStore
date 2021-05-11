import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth, signInWithGoogle } from '../../firebase/utils'
import google from '../../assets/images/google.png'

const initialState = {
    email: '',
    password: ''
}

const Signin = () => {
    const history = useHistory()
    const [ errors, setErrors ] = useState([])

    const [userDetails, setUserDetails] = useState(initialState)

    const handleChange = (e) => {
      const { name, value } = e.target

        setUserDetails({
            ...userDetails,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(userDetails.email, userDetails.password)
            setUserDetails(initialState)
            history.push('/');
        } catch (e) {
            setErrors([...errors, e.message])
            // console.log(e.message)
        }
    }

    const googleSignin = async e => {
        await signInWithGoogle()
        history.push('/');
    }

    return (
        <div className="signup_wrapper">
            <div className="signup">
                <h2 className="second-level-heading">Login</h2>
                <button onClick={googleSignin} className="btn btn_xl btn_grey">
                    <span className="signup_img"><img src={google} alt="" /></span>
                    Login with Google
                    </button>

                    <ul className="signup_errors">
                        {
                            errors.length ? errors.map( err => <li>{err}</li>) : null
                        }
                    </ul>

                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={userDetails.email} placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} value={userDetails.password}  placeholder="Enter Password" required/>
                    </div>
                    <button type="submit" className="btn btn_light btn_xl">Login</button>
                    <div>Don't have an account? <a className="alt_cta" href="/signup">Create account</a></div>
                </form>
            </div>
        </div>
    )
}

export default Signin;