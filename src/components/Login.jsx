import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Link, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const Login = ({ open, onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login")
        onClose();
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: open ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: 'lightgrey',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1000, // Ensure the login form is above other elements
            }} >

            <Paper
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 10,
                    boxShadow: 10,
                    width: "30%",
                    m: 5
                }}>

                <Avatar sx={{ margin: 5, bgcolor: "error.main" }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h4" mb={2}>SignIn</Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ m: 2, width: "60%" }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center">
                    <TextField
                        margin="normal"
                        required
                        sx={{ width: "80%" }}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle EmailAddress visibility"
                                        edge="end"
                                    >
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        sx={{ width: "80%" }}
                        id="email"
                        label="Password"
                        name="password"
                        autoComplete="password"
                        autoFocus
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me..!"
                    />
                    <Button fullWidth type="Submit" variant="contained">
                        Login
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot password</Link>
                        </Grid>
                        <Grid item >
                            <Link href="#" variant="body2">Don't have any Account? Signup</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box >
    )
}
export default Login;