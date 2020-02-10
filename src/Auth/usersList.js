import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { usersListReq,editUserReq,  deleteUserReq } from '../action'
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import AlertDialog from '../component/alertbox.js'
const UsersList = (props) => {
  const [usersList, setUserList] = useState([])
  const [openDialog, setDialog]=useState(false)
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'firstName' },
      { title: 'Surname', field: 'lastName' },
      { title: 'Email', field: 'email', },
      { title: 'Status', field: 'status', render:rowData =><Button variant="contained" color={`${rowData.isActive ?'primary':"secondary"}`} onClick={handleClickOpen}>
      {rowData.isActive ? "Active" :"Deactive "}
    </Button>
    },
      // {
      //   title: 'Birth Place',
      //   field: 'birthCity',
      //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      // },
    ],
    data:
      usersList
    // { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    // {
    //   name: 'Zerya Betül',
    //   surname: 'Baran',
    //   birthYear: 2017,
    //   birthCity: 34,
    // },
    ,
  });
  const handleClickOpen =()=>{
    console.log("click")
    setDialog(true)
  }
  useEffect(() => {
    console.log("hello")
    props.onGetusersList()
  }, [])

  useEffect(() => {
    console.log(props)
    if (props.usersListReducer && props.usersListReducer.usersList) {
      setUserList(props.usersListReducer.data.data);
      setState({
        ...state,
        data:props.usersListReducer.data.data
      })
      
    }
  }, [props.usersListReducer.usersList])
  
  //  useEffect(() => {
  //   console.log(props)
  //   if (props.deleteUserReducer && props.deleteUserReducer.isLoading) {
  //     setUserList(props.usersListReducer.data.data);
  //     setState({
  //       ...state,
  //       data:props.usersListReducer.data.data
  //     })
      
  //   }
  // }, [!props.deleteUserReducer.isLoading])
  console.log(openDialog,'kkkkkkkkkkkkk')
  return (
    <>
    <MaterialTable
    disableClick={true}
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      actions={[
        {
          icon: 'save',
          tooltip: 'Save User',
          onClick: (event, rowData) => {
            // Do save operation
          }
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
                  console.log(newData,"newData")
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
       <AlertDialog />
        :""}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return { 
    onGetusersList: (data) => dispatch(usersListReq(data)),
    onEditUser: (data) => dispatch(editUserReq(data)),
    onDeleteUser: (data) => dispatch(deleteUserReq (data)),
}
}
const mapStateToProps = (state) => ({
  usersListReducer: state.UsersListReducer,

});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);