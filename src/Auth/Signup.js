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
import { signUpReq } from '../action/signup';
import { AppRoutes } from '../config/AppRoutes';
import { useHistory } from "react-router-dom";
import { IMAGE_URL } from "../config/AppConfig";
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
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
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
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
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    // top: '50%',
    left: '50%',
    marginTop: "25px",
    marginLeft: -12,
  },
}));

const SignUP = (props) => {
  let history = useHistory()
  const classes = useStyles();
  const [inputs, setInputs] = useState({});
  const [previewImage, setPreviewImage] = useState('')
  const [userImage, setUserImage] = useState('')
  // const buttonClassname = clsx({
  //   [classes.buttonSuccess]: success,
  // });
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  const { signUpStatus: { isLoading } } = props;
  useEffect(() => {

    if (props.signUpStatus.isSignup)
      history.push(AppRoutes.SIGNUP)
    clearState()
  }, [props.signUpStatus.isSignup])
  const clearState = () => {
    setInputs({});

  }
  const handleSubmit = (event) => {
    if (event) {
      // const data = {
      //   ...inputs
      // }
      var data = new FormData(event.target)
      event.preventDefault();
      props.onSignUP(data)
    }
  }
  const onUploadImage = (e) => {
    const reader = new FileReader();
    let file = e.target.files ? e.target.files[0] : ""
    reader.onloadend = async (e) => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const text = (e.target.result)
        setPreviewImage(text)
        setUserImage(file)
      };
    }
    reader.readAsDataURL(file)
  }
  // console.log(previewImage)
  console.log(isLoading, 'isLoading')
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="off"
            autoFocus
            value={inputs.firstName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="off"
            autoFocus
            value={inputs.lastName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="profileImage"
            label="Profile Image"
            name="profileImage"
            autoComplete="off"
            autoFocus
            // value={inputs.previewImage}
            onChange={onUploadImage}
            type="file"
          />
          {previewImage ? <img src={`${IMAGE_URL}${previewImage}`} /> : ""}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={inputs.email}
            onChange={handleInputChange}
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
            autoComplete="current-password"
            value={inputs.password}
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
            id="confirmPassword"
            autoComplete="current-password"
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

            disabled={isLoading}
          >
            Sign Up
          </Button>
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
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
  return { onSignUP: (data) => dispatch(signUpReq(data)) }
}
const mapStateToProps = (state) => ({
  signUpStatus: state.SignUpReducer
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUP);
