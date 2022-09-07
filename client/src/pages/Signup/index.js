import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import NavTabs from '../NavBar';

import Auth from '../../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();


    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <NavTabs />
      <div className="col-12 col-lg-10">
        <div className="card">
          <h3 className="card-header title p-3 mb-1">Signup</h3>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="p-6" onSubmit={handleFormSubmit}>
              <p>
                Already have an account?{' '}
                <Link to="/Login">login here.</Link>
              </p>

                <div className='field'>
                  <label htmlFor='username' className='label'>
                    username
                  </label>

                  <div className='control'>
                    <input
                      className="input"
                      placeholder="Your Username"
                      name="username"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className='field'>
                  <label htmlFor='email' className='label'>
                    Email
                  </label>

                  <div className='control'>
                    <input
                      className="input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>


                <div className='field'>
                  <label htmlFor='password' className='label'>
                    Password
                  </label>

                  <div className='control'>
                    <input
                      className="input"
                      id='password'
                      placeholder="********"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>


                <div className='field pt-3'>
                  <div className='control'>
                    <button
                      className="button is-info"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>

              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;