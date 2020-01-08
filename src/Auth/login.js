import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { loginReq } from '../action/login';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { AppRoutes } from '../config/AppRoutes'
import validation from '../Helper/Validation'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  let history = useHistory()
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  const { loginReducer: { isLoading } } = props;
  const initialState = {
    email: "",
    password: "",
  };
  const [
    { email, password },
    setState
  ] = useState(initialState);


  const handleInputChange = (event) => {
    event.persist();
    //setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    // setEmail(event.target.value)
    // setPassword(event.target.value)
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));

  }
  useEffect(() => {
    if (props.loginReducer && props.loginReducer.isLoggedIn) {
      console.log(localStorage.getItem('token'))
      history.push(AppRoutes.DASHBOARD)
      clearState()
    }
  }, [props.loginReducer.isLoggedIn])
  const clearState = () => {
    setState({ ...initialState });
    // setInputs({});
    // setEmail('')
    // setPassword('')
  }
  const handleSubmit = (event) => {
    if (event) {
      // const data = {
      //   ...inputs
      // }
      var data = new FormData(event.target)
      event.preventDefault();
      props.onLogin(data)
    }
    // if (props.loginStatus.isLoggedIn) {
    //   console.log("Hello")
    // }

  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // autoComplete="email"
            autoFocus
            value={email}
            onChange={handleInputChange}
            validation={['required', 'email']}
            validationmsg={[
              'This field is required',
              'Email address is not valid',
            ]}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            // autoComplete="current-password"
            value={password}
            onChange={handleInputChange}
            validation={['required', 'min[6]', 'password', 'max[50]']}
            validationmsg={[
              'This field is required.',
              'Password contain at least 6 characters',
              "Your password can't start or end with a blank space",
              'Password should not be more than 50 characters',
            ]}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isLoading ? "loaading..." : ""}
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={AppRoutes.FORGOTPASSWORD} variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href={AppRoutes.SIGNUP} variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>

  );


}
const mapDispatchToProps = (dispatch) => {
  return { onLogin: (data) => dispatch(loginReq(data)) }
}
const mapStateToProps = (state) => ({
  loginReducer: state.LoginReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
