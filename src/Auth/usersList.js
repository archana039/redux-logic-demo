import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { usersListReq } from '../action/users'
import { connect } from "react-redux";
const UsersList = (props) => {
  const [usersList, setUserList] = useState([])
  const [state, setState] = useState({
    columns: [
      { title: 'Name', field: 'firstName' },
      { title: 'Surname', field: 'lastName' },
      { title: 'Email', field: 'email', },
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
  useEffect(() => {
    console.log("hello")
    props.onGetusersList()
  }, [])

  useEffect(() => {
    console.log(props)
    if (props.usersListReducer && props.usersListReducer.usersList) {
      console.log(props.usersListReducer.data)
      setUserList(props.usersListReducer.data.data)
    }
  }, [props.usersListReducer.usersList])
  console.log(state.data, 'usersList')
  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
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
                  return { ...prevState, data };
                });
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
            }, 600);
          }),
      }}
    />
  );
}
const mapDispatchToProps = (dispatch) => {
  return { onGetusersList: (data) => dispatch(usersListReq(data)) }
}
const mapStateToProps = (state) => ({
  usersListReducer: state.UsersListReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);