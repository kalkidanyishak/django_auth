import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const ResetPassword = ({ reset_password }) => {
  const navigate = useNavigate();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        navigate("/");
    }

    return (
        <div className=''>
            <h1>Request Password Reset:</h1>
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
                <button className='' type='submit'>Reset Password</button>
            </form>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
