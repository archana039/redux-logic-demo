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
import { useHistory } from "react-router-dom";
import { AppRoutes } from '../config/AppRoutes'
import { forgotPasswordReq } from '../action/forgotpassword';
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

const ForgotPassword = (props) => {
  let history = useHistory()
  const classes = useStyles();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('')
  const [inputs, setInputs] = useState({});
  const { forgotPasswordReducer: { isLoading } } = props;
  const initialState = {
    email: "",
  };
  const [
    { email },
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
    if (props.forgotPasswordReducer && props.forgotPasswordReducer.forgotPassword) {
      console.log("effect")
      // history.push(AppRoutes.DASHBOARD)
      clearState()
    }
  }, [props.forgotPasswordReducer.forgotPassword])
  const clearState = () => {
    console.log("helloupdate")
    setState({ ...initialState });
    // setInputs({});
    // setEmail('')
    // setPassword('')
  }
  console.log(props.forgotPasswordReducer.isLoading)
  console.log(props.forgotPasswordReducer)
  const handleSubmit = (event) => {
    if (event) {
      // const data = {
      //   ...inputs
      // }
      var data = new FormData(event.target)
      event.preventDefault();
      props.onForgotPassword(data)
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
          Forgot Password
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
            Submit
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href={AppRoutes.LOGIN} variant="body2">
                Sign In?
              </Link>
            </Grid>
            <Grid item>
              <Link href={AppRoutes.FORGOTPASSWORD} variant="body2">
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
  return { onForgotPassword: (data) => dispatch(forgotPasswordReq(data)) }
}
const mapStateToProps = (state) => ({
  forgotPasswordReducer: state.ForgotPasswordReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
