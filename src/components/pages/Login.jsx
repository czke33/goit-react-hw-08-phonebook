import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser, refreshUser } from '../../redux/operations';
import { getIsLogged } from '../../redux/selectors';
import Navigation from '../../components/Navigation/Navigation';


const Login = () => {
  const isLogged = useSelector(getIsLogged);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    dispatch(refreshUser());
    if (isLogged) {
      navigate('/');
    }
  }, [isLogged, dispatch, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(
      loginUser({ email, password }),
    );
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <header>
        <Navigation />
      </header>

      <div className='container center'>
        <div className='border'>
          <form onSubmit={handleSubmit}>
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
              <button type='submit'>Login</button>
            </div>
          </form>

          <p>
            No account yet? <NavLink to='/register'>Register</NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;