import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser, refreshUser } from 'redux/operations';
import { getIsLogged } from 'redux/selectors';
import Navigation from '../../components/Navigation/Navigation';

const Register = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged === true) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (<>
      <header>
        <Navigation />
      </header>
      <div className='container center'>
        <div className='border'>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id='name'
                name='name'
                type='text'
                required
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                id='email-address'
                name='email'
                type='email'
                required
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                id='password'
                name='password'
                type='password'
                required
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button type='submit'>Register</button>
            </div>
          </form>

          <p>
            Already have an account? <NavLink to='/login'>Login</NavLink>
          </p>
        </div>
      </div>
    </>);
};

export default Register;