import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <>
            <div className="login-main-container" id="login-main-container">
                <div className="login-container">
                    <form action="#">
                        <h1 className='top-login-text'>Login</h1>
                        <div class="social-container">
                            <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for login</span>

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
                        <button className='login-btn'>Login</button>
                    </form>
                    <p className='login-text'>Don't have any account?<a href="/Registration" className='login-link'>Sign up</a></p>
                </div>
            </div>
        </>
    )
}
