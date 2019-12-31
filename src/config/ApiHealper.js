import axios from 'axios'

export default async function FetchFromServer(url, method, data, token) {
  var headers = '';
  //let token = localStorage.getItem('localstorageval');
  try {
    if (token) {
      headers = token;
    }
    console.log(data,'axiosdata')
    const response = await axios({
      url,
      baseURL: "http://3.130.81.225/flowhaus/api",
      method,
      data,
      headers: {
        'Auth-Key': headers,
      },

    })
    return response.data
  }
  catch (error) {
    return error.response;
  }
}