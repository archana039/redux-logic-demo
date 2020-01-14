import React from 'react'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppRoutes } from '../config/AppRoutes'
import Link from '@material-ui/core/Link';
const Dashboard = () => {
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