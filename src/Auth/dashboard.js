import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppRoutes } from '../config/AppRoutes'
import Link from '@material-ui/core/Link';
import { useHistory } from "react-router-dom";
const Dashboard = () => {
  let history = useHistory()
  useEffect(() => {
    let token = localStorage.getItem('token')
    console.log(token, 'token')
    if (token === null) {
      history.push(AppRoutes.LOGIN)
    }
  }, [])
  return (
    <Typography component="h1" variant="h5">
      <Link href={AppRoutes.BLOG} variant="body2">
        <Button variant="contained" color="primary">
          Add Blog
        </Button>
      </Link>
      <Link href={AppRoutes.BLOGLIST} variant="body2">
        <Button variant="contained" color="primary">
          Blog List
        </Button>
      </Link>
    </Typography>
  )
}
export default Dashboard