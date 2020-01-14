import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { listBlogReq, deleteBlogReq } from '../action/blogType';
import { connect } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { AppRoutes } from '../config/AppRoutes';
import { useHistory } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
const columns = [
  { id: 'type', label: 'Blog Type', minWidth: 50 },
  { id: 'blog_title', label: 'Blog Title', minWidth: 50 },
  {
    id: 'url',
    label: 'Blog Url',
    minWidth: 100,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'cover_photo_thumbnail',
    label: 'Cover Photo',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  'India', 'IN', 1324171354, 3287263
  // createData('India', 'IN', 1324171354, 3287263),
  // createData('China', 'CN', 1403500365, 9596961),
  // createData('Italy', 'IT', 60483973, 301340),
  // createData('United States', 'US', 327167434, 9833520),
  // createData('Canada', 'CA', 37602103, 9984670),
  // createData('Australia', 'AU', 25475400, 7692024),
  // createData('Germany', 'DE', 83019200, 357578),
  // createData('Ireland', 'IE', 4857000, 70273),
  // createData('Mexico', 'MX', 126577691, 1972550),
  // createData('Japan', 'JP', 126317000, 377973),
  // createData('France', 'FR', 67022000, 640679),
  // createData('United Kingdom', 'GB', 67545757, 242495),
  // createData('Russia', 'RU', 146793744, 17098246),
  // createData('Nigeria', 'NG', 200962417, 923768),
  // createData('Brazil', 'BR', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
const BlogList = (props) => {
  let history = useHistory()
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [blogList, setBlogList] = useState([])
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleEdit = (id) => {
    console.log(AppRoutes.EDITBLOG.replace(":id", id))
    history.push(AppRoutes.EDITBLOG.replace(":id", id))
  }
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDelete = (id) => {
    props.onBlogDelete(id)
  }
  useEffect(() => {
    props.onBlogList()
    if (props.blogListReducer && props.blogListReducer.isListSuccess) {
      setBlogList(props.blogListReducer.data.blog)
    }
    if (props.blogDeleteReducer.isDeleted) {
      props.onBlogList()
    }
  }, [props.blogListReducer.isListSuccess, props.blogDeleteReducer.isDeleted])

  return (
    <Paper className={classes.root}>
      {console.log(blogList)}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {blogList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id]
                    return (
                      column.label === "Cover Photo" ?
                        <TableCell key={column.id} align={column.align}>
                          <img src={row.cover_photo_thumbnail} />
                        </TableCell>
                        :
                        column.label === "Action" ?
                          <TableCell key={column.id} align={column.align} >
                            <svg class="MuiSvgIcon-root jss403 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" onClick={() => handleEdit(row.blog_id)}></path></svg>
                            <svg class="MuiSvgIcon-root jss652 MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation" title="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" onClick={() => handleDelete(row.blog_id)}></path></svg>
                          </TableCell>
                          :
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                          </TableCell>

                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onBlogList: () => dispatch(listBlogReq()),
    onBlogDelete: (data) => dispatch(deleteBlogReq(data))
  }
}
const mapStateToProps = (state) => ({
  blogListReducer: state.BlogTypeReducer,
  blogDeleteReducer: state.BlogTypeReducer
});


export default connect(mapStateToProps, mapDispatchToProps)(BlogList);