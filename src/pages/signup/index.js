import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './signup.css'
import { auth, handleUserProfile } from '../../firebase/utils'

const initialState = {
    fullname: '',
    email: '',
    password: ''
}

const Signup = () => {
    const history = useHistory()
    const [ errors, setErrors ] = useState([])
    const [userDetails, setUserDetails] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const { user } = await auth.createUserWithEmailAndPassword(userDetails.email, userDetails.password)
            await handleUserProfile(user, { ...userDetails.fullname })
            setUserDetails(initialState)
            history.push('/');
        } catch (e) {
            setErrors([...errors, e.message])
            // console.log(e.message)
        }
    }

    return (
        <div className="signup_wrapper">
            <div className="signup">
                <h2 className="second-level-heading">Create Account</h2>
                <ul className="signup_errors">
                        {
                            errors.length ? errors.map( err => <li>{err}</li>) : null
                        }
                    </ul>
                <form onSubmit={handleSubmit}>
                    <div className="form_group">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" name="fullname" onChange={handleChange} value={userDetails.fullname} id="fullname" placeholder="Enter Fullname" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" id="email" onChange={handleChange} value={userDetails.email} placeholder="Enter Email Address" required/>
                    </div>
                    <div className="form_group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={handleChange} value={userDetails.password} placeholder="Enter Password" required/>
                    </div>
                    <button type="submit" className="btn btn_light btn_xl">Create Account</button>
                    <div>Already have an account? <a className="alt_cta" href="/login">Login</a></div>
                </form>
            </div>
        </div>
    )
}

export default Signup