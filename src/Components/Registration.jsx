import React from 'react'
import './Registration.css'

export default function Registration() {
    return (
        <>
            <div className="container" id="container">
                <div className="sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <div class="infield">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name" />
                            <label></label>
                        </div>
                        <div class="infield">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email" name="email" />
                            <label></label>
                        </div>
                        <div class="infield">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password" />
                            <label></label>
                        </div>
                        <button>Sign Up</button>
                    </form>
                    <p className='lready-sign-up-text'>Already have an account<a href="#" className='sign-in-link'>Sign in</a></p>
                </div>
            </div>
        </>
    )
}
