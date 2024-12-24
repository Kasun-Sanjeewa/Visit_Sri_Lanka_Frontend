import React from 'react'

export default function Login() {
    return (
        <>
            <div className="container" id="container">
                <div className="sign-up-container">
                    <form action="#">
                        <h1>Login</h1>
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
                        <button className='sign-up-btn'>Login</button>
                    </form>
                    <p className='lready-sign-up-text'>Don't have any account?<a href="/Registration" className='sign-in-link'>Sign up</a></p>
                </div>
            </div>
        </>
    )
}
