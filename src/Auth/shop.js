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
import validation from '../Helper/Validation'
import InputLabel from '@material-ui/core/InputLabel';
import { addBlogReq, editBlogReq, submitEditBlogReq } from '../action/blogType'
// import Select from '@material-ui/core/Select';

import NativeSelect from '@material-ui/core/NativeSelect';
import { blogTypeReq } from '../action/blogType';
import { AppRoutes } from '../config/AppRoutes';
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
  const [blogType, setBlogType] = useState('');
  const [photo, setImage] = useState('')
  const { blogTypeReducer: { isLoading } } = props;
  const initialState = {
    url: "",
    date: new Date(),
    type: '',
    blog_title: '',
    cover_photo: '',
    blog_id: ''
  };
  const [
    { url, date, blog_title, cover_photo, type, blog_id },
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
    let token = localStorage.getItem('token')
    console.log(token, 'token')
    if (token === null) {
      history.push(AppRoutes.LOGIN)
    }
  }, [])
  useEffect(() => {
    if (props.match.params && props.match.params.id) {
      props.editBlogReq(props.match.params.id)
    }
    else {
      props.blogType();
    }
    if (props.blogTypeReducer.isSuccess) {
      setBlogType(props.blogTypeReducer.data)
    }
    if (props.blogTypeReducer.isEditSuccess) {
      setBlogType(props.blogTypeReducer.data.blog_type)
      setState({
        blog_title: props.blogTypeReducer.data.Detail.blog_title,
        url: props.blogTypeReducer.data.Detail.url,
        cover_photo: props.blogTypeReducer.data.Detail.cover_photo,
        type: props.blogTypeReducer.data.Detail.blog_article_type_id,
        blog_id: props.blogTypeReducer.data.Detail.blog_id
      })
      // setState(props.blogTypeReducer.data.detail)
    }
    console.log(props.blogTypeReducer.isEditable, 'props.blogTypeReducer.isEditable')
    if (props.blogTypeReducer.isEditable) {
      history.push(AppRoutes.BLOGLIST)
    }
  }, [props.blogTypeReducer.isEditSuccess, props.blogTypeReducer.isEditable])
  const clearState = () => {
    setState({ ...initialState });

  }
  const handleSubmit = (event) => {
    if (event) {
      // const data = {
      //   ...inputs
      // }
      var data = new FormData(event.target)
      // data.append("cover_photo", cover_photo)
      data.append("blog_id", blog_id)
      event.preventDefault();
      //props.addBlogReq(data)
      props.submitEditBlogReq(data)
    }
    // if (props.loginStatus.isLoggedIn) {
    //   console.log("Hello")
    // }

  }
  const readURL = (input) => {

    input = input.target;
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        console.log(e.target.result)
        setImage(e.target.result)
        setState(prevState => ({ ...prevState, cover_photo: e.target.result }));
      }.bind(this);
      setImage(input.files[0].name)
      // this.setState({
      //  imageTitle: input.files[0].name,
      // });
      reader.readAsDataURL(input.files[0]);
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {props.match.params && props.match.params.id ? "Edit Shop" : "Add Shop"}
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
            name="type"
          // input={<BootstrapInput />}
          >
            <option value="" />
            {props.blogTypeReducer.data && props.blogTypeReducer.data.length ?
              props.blogTypeReducer.data.map((value, index) => (
                <option value={value.blog_article_id} key={index}>{value.type}</option>
              ))
              : ""}
          </NativeSelect>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="cover_photo_main"
            label="Shop Cover Photo"
            type="file"
            id="cover_photo"
            // autoComplete="current-password"
            onChange={readURL}
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
  return {
    blogType: () => dispatch(blogTypeReq()),
    addBlogReq: (data) => dispatch(addBlogReq(data)),
    editBlogReq: (data) => dispatch(editBlogReq(data)),
    submitEditBlogReq: (data) => dispatch(submitEditBlogReq(data)),

  }
}
const mapStateToProps = (state) => ({
  blogTypeReducer: state.BlogTypeReducer,

});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
