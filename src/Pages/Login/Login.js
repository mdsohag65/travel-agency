import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        console.log(email, pass);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <section>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content">
                    <form onSubmit={handleSubmit}>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input ref={emailRef} type="text" placeholder="email" class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input ref={passRef} type="password" placeholder="password" class="input input-bordered" required />
                                    <label class="label">
                                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">Login</button>
                                </div>
                                <p>New to Travio?<span onClick={navigateRegister} className='text-accent link link-hover'>Please Register</span></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;