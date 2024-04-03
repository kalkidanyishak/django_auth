import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
const Login = ({login, isAuthenticated}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }

    });

  return (
    <div className=''>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className=''>
                    <input
                        className=''
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className=''>
                    <input
                        className=''
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='' type='submit'>Login</button>
            </form>
            
            <p className=''>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className=''>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, {login}) (Login);