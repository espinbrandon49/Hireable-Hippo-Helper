import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "../../index.css"

const styles = {
  background: {
    height: "100%",
  },
};

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };
  
    return (
      <Grid container justifyContent="center" id="mainBackground" style={styles.background}>
        <Grid item xl={4} lg={6} md={8} sm={10} xs={12}>
          <Card elevation={15} sx={{borderRadius: 3, marginTop: "50px"}}>

            <Typography component="div" variant="h3" sx={{textAlign: "center", padding: "25px", fontWeight: "bold"}}>
              Login
            </Typography>
            
            <Box>
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <CardContent component="form" onSubmit={handleFormSubmit}>

                  <FormControl fullWidth sx={{padding:"65px 75px 0 75px"}}>
                    <InputLabel htmlFor='email'>
                      <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "5px", fontWeight: "bold"}}>
                        Email
                      </Typography>
                    </InputLabel>
                    <TextField
                      name="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      InputProps={{ endAdornment: <InputAdornment position="end"> <EmailIcon /> </InputAdornment> }}
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{padding:"75px 75px 0 75px"}}>
                    <InputLabel htmlFor='password'>
                      <Typography variant="h5" sx={{paddingLeft:"65px", marginTop: "15px", fontWeight: "bold"}}>
                          Password
                        </Typography>
                    </InputLabel>
                    <TextField
                      name="password"
                      placeholder="********"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                      InputProps={{ endAdornment: <InputAdornment position="end"> <LockIcon /> </InputAdornment> }}
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{padding:"50px 75px 50px 75px"}}>
                    <Button variant="contained" size="large" type="submit" sx={{borderRadius: 6, padding:"12px", fontWeight: "bold"}}>Login</Button>
                  </FormControl>

                  <Divider variant="middle" />

                  <p style={{"textAlign": "center", "padding": "35px"}}>
                    Don't have an account?{' '}
                    <Link to="/Signup">Signup here.</Link>
                  </p>
                  
                </CardContent>
              )}
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </Box>
          </Card>
        </Grid>
      </Grid>
    );
  };
  
  export default Login;