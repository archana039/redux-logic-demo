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
import { resetPasswordReq } from '../action/resetpassword';
import * as queryString from 'query-string';
import { linkVerificationReq } from '../action/linkverification';
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

const ResetPassword = (props) => {
  let history = useHistory()
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  const [token, setToken] = useState('')
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));

  }
  useEffect(() => {
    console.log(props)
    if (props && props.location) {
      let searchParams = queryString.parse(props.location.search);
      let data = {
        email: searchParams.user,
        id: searchParams.verification,
        token: searchParams.token
      }
      props.onLinkverified(data)
      // setId(searchParams.verification)
      // setEmail(searchParams.user)
      // setToken(searchParams.token)
    }
  }, [])
  useEffect(() => {
    console.log(props.linkVerifiedReducer.linkverify)
    if (props.linkVerifiedReducer.linkverify) {
      if (props.linkVerifiedReducer.data)
        setId(props.linkVerifiedReducer.data._id)
      setEmail(props.linkVerifiedReducer.data.email)
      // setToken(searchParams.token)
    }
  }, [props.linkVerifiedReducer.linkverify])
  useEffect(() => {
    if (props.resetPasswordReducer.PasswordSuccess) {
      props.history.push(AppRoutes.LOGIN)
    }
  }, [props.resetPasswordReducer.PasswordSuccess])
  const handleSubmit = (event) => {
    if (event) {
      const data = {
        ...inputs,
        email,
        id,
        token
      }
      // var data = new FormData(event.target)
      event.preventDefault();
      props.onResetPassword(data)
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
          Reset Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="newPassword"
            label="New Password"
            type="password"
            id="Newpassword"
            // autoComplete="current-password"
            value={inputs.newPassword}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="Confirmpassword"
            // autoComplete="current-password"
            value={inputs.confirmPassword}
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
            {/* {isLoading ? "loaading..." : ""} */}
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
  return {
    onResetPassword: (data) => dispatch(resetPasswordReq(data)),
    onLinkverified: (data) => dispatch(linkVerificationReq(data))
  }
}
const mapStateToProps = (state) => ({
  resetPasswordReducer: state.ResetPasswordReducer,
  linkVerifiedReducer: state.LinkVerificationReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
