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
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import NativeSelect from '@material-ui/core/NativeSelect';
import { blogTypeReq } from '../action/blogType';
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

const Shop = (props) => {
  let history = useHistory()
  const classes = useStyles();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('')
  const [inputs, setInputs] = useState({});
  // const { loginReducer: { isLoading } } = props;
  const initialState = {
    url: "",
    date: new Date(),
    type: [],
    blog_title: '',
    cover_photo: ''
  };
  const [
    { url, date, blog_title, cover_photo, type },
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
    console.log(props.blogType, 'props.blogType')
    return props.blogType
  }, [])
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
          Add Shop
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="blog_title"
            label="Blog Title"
            name="blog_title"
            // autoComplete="email"
            autoFocus
            value={blog_title}
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
            name="url"
            label="Shop Url"
            type="text"
            id="Url"
            // autoComplete="current-password"
            value={url}
            onChange={handleInputChange}
            validation={['required', 'min[6]', 'password', 'max[50]']}
            validationmsg={[
              'This field is required.',
              'Password contain at least 6 characters',
              "Your password can't start or end with a blank space",
              'Password should not be more than 50 characters',
            ]}

          />
          <InputLabel id="demo-simple-select-label">Article Type</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={type}
            onChange={handleInputChange}
          // input={<BootstrapInput />}
          >
            <option value="" />
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cover_photo"
            label="Shop Cover Photo"
            type="file"
            id="ShopPhoto"
            // autoComplete="current-password"
            value={cover_photo}
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
            {/* {isLoading ? "loaading..." : ""} */}
            Save
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>

  );


}
const mapDispatchToProps = (dispatch) => {
  return { blogType: () => dispatch(blogTypeReq) }
}
const mapStateToProps = (state) => ({
  // loginReducer: state.LoginReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
