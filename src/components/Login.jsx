import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { LockOutlined, Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleSubmit = () => {
        console.log("Login")
    }
    return (
        <Box sx={{

            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgrey"
        }} >
            
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    elevation: 2,
                    borderRadius: 2,
                }}>
                    <Avatar sx={{ margin: 1, bgcolor: "error.main" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h4">SignIn</Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required fullWidth
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
                                            // onClick={handleClickShowEmailAddress}
                                            // onMouseDown={handleMouseDownEmailAddress}
                                            edge="end"
                                        >
                                            {/* {showEmailAddress } */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            margin="normal"
                            required fullWidth
                            id="Password"
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
                        <Button
                            type="Submit"
                            fullWidth
                            variant="contained"
                            onSubmit={(e) => { handleSubmit() }}
                        >Login</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">Forgot password</Link>
                            </Grid>
                            <Grid item >
                                <Link href="#" variant="body2">Don't have any Account? Signup</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            
        </Box >
    )
}
export default Login