import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { usersListReq, editUserReq, deleteUserReq, userStatusReq } from '../action'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import AlertDialog from '../component/alertbox.js'
import { IMAGE_URL } from "../config/AppConfig";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),

    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UsersList = (props) => {
  const classes = useStyles();
  const [usersList, setUserList] = useState([])
  const [openDialog, setDialog] = useState(false)
  const [data, setData] = useState({})
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(10)
  const [state, setState] = useState({
    columns: [
      { title: "Profile Image", field: "profileImage", render: rowData => <img src={`${IMAGE_URL}${rowData.profileImage}`} style={{ width: 50, borderRadius: '50%' }} />, type: 'file', filtering: false },

      { title: 'Name', field: 'firstName', customFilterAndSearch: (term, rowData) => term == console.log(term === rowData.firstName, term, rowData.firstName) },
      { title: 'Surname', field: 'lastName', filtering: false },
      { title: 'Email', field: 'email', filtering: false },
      { title: 'Created Date', field: 'createdAt', filtering: false },
      { title: 'Updated Date', field: 'updatedAt', filtering: false },
      {
        title: 'Status', field: 'status', editable: 'never', lookup: { true: 'Active', false: 'Deactive' },
        render: rowData => <Button variant="contained" color={`${rowData.isActive ? 'primary' : "secondary"}`} onClick={() => handleClickOpen(rowData)} >
          {rowData.isActive ? "Active" : "Deactive "}
        </Button>
      },
    ],
    data:
      usersList
    ,

  });
  const handleClickOpen = (data) => {
    console.log("click", data)
    setDialog(true)
    setData({
      id: data._id,
      isActive: !data.isActive
    })
  }
  const handleClose = (param) => {
    if (param === "ok") {
      props.onUserStatus(data)
    }
    setDialog(false)
  }
  useEffect(() => {
    let data = {
      skip, limit
    }
    props.onGetusersList(data)
  }, [])

  useEffect(() => {
    console.log(props)
    if (props.usersListReducer && props.usersListReducer.usersList && props.usersListReducer.data) {
      console.log(props.usersListReducer.data.data, 'props.usersListReducer.data.data')
      setUserList(props.usersListReducer.data.data);
      setState({
        ...state,
        data: props.usersListReducer.data.data
      })

    }
  }, [props.usersListReducer.usersList])
  useEffect(() => {
    if (props.usersListReducer.userStatus && props.usersListReducer.data) {
      let result = state.data
      let id = data.id
      console.log(result)
      // console.log(result.findIndex(id))
      console.log(data, 'data')
    }
  }, [props.usersListReducer.userStatus])
  // useEffect(() => {
  //   console.log(props)
  //   if (props.deleteUserReducer && props.deleteUserReducer.isLoading) {
  //     setUserList(props.usersListReducer.data.data);
  //     setState({
  //       ...state,
  //       data: props.usersListReducer.data.data
  //     })

  //   }
  // }, [!props.deleteUserReducer.isLoading])
  console.log(props.usersListReducer.isLoading, 'kkkkkkkkkkkkk')
  return (
    <>
      {props.usersListReducer.isLoading ? <div className={classes.root}>
        <CircularProgress />
      </div> : ""}

      <MaterialTable
        disableClick={true}
        title="Editable Example"
        columns={state.columns}
        data={state.data}
        options={{
          search: true
        }}
        options={{
          filtering: true, selection: true,
          // selectionProps: rowData => alert(rowData)
        }}
        onSelectionChange={(rows) => alert('You selected ' + rows + ' rows')}

        actions={[
          {
            tooltip: 'Remove All Selected Users',
            icon: 'delete',
            onClick: (evt, data) => alert('You want to delete ' + evt + ' rows')
          },
          {
            tooltip: 'Remove All Selected Users',
            icon: 'edit',
            onClick: (evt, data) => alert('You want to delete ' + data + ' rows')
          },
          {
            tooltip: 'Remove All Selected Users',
            icon: 'Active',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
          },
          {
            tooltip: 'Remove All Selected Users',
            icon: 'Deactive',
            onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
          }
        ]}

        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    console.log(newData, "newData")
                    return { ...prevState, data };
                  });
                  props.onEditUser(newData)
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
                props.onDeleteUser(oldData)
              }, 600);
            }),
        }}
      />
      {openDialog ?
        <AlertDialog openDialog={openDialog} handleClose={handleClose} />
        : ""}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetusersList: (data) => dispatch(usersListReq(data)),
    onEditUser: (data) => dispatch(editUserReq(data)),
    onDeleteUser: (data) => dispatch(deleteUserReq(data)),
    onUserStatus: (data) => dispatch(userStatusReq(data))
  }
}
const mapStateToProps = (state) => ({
  usersListReducer: state.UsersListReducer,

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);