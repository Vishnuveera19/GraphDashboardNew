import React, { useState } from 'react';
import { Grid, Button, TextField, Paper, Typography, Box, Container } from '@mui/material';
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { ServerConfig } from '../serverconfiguration/serverconfig';
import { LOGIN } from '../serverconfiguration/controllers';
import { postRequest } from '../serverconfiguration/requestcomp';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, isLoggedIn } = useContext(UserContext);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);

    postRequest(ServerConfig.url, LOGIN, { username, password })
      .then(() => {
        setUser(username);
        isLoggedIn(true);
        setError('');
      })
      .catch(() => {
        setError('Invalid username or password');
      });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: '400px', width: '100%' }}>
        <Typography component="h1" variant="h4" align="center" gutterBottom sx={{ color: '#1976D2', fontWeight: 'bold' }}>
          Login
        </Typography>
        {error && (
          <Typography color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                sx={{ backgroundColor: '#f9f9f9' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                sx={{ backgroundColor: '#f9f9f9' }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, backgroundColor: '#1976D2', color: '#fff', '&:hover': { backgroundColor: '#1565C0' } }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
