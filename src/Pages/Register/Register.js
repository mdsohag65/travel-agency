import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const pass = event.target.password.value;
    }
    return (
        <div>
            <section>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content">
                        <form onSubmit={handleRegister}>
                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Email</span>
                                        </label>
                                        <input type="text" name='email' placeholder="email" class="input input-bordered" required />
                                    </div>
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" class="input input-bordered" required />
                                        <label class="label">
                                            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div class="form-control mt-6">
                                        <button class="btn btn-primary text-white">Register</button>
                                    </div>
                                    <p>Already have an account?<Link to='/login'><span className='text-accent link link-hover'>Please Login</span></Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;