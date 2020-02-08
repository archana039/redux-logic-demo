const ApiRoutes = {
  SIGNUP: {
    service: "/auth",
    url: "/signup",
    method: "POST",
    authenticate: false,
  },
  LOGIN: {
    service: "/auth",
    url: "/login",
    method: "POST",
    authenticate: true,
  },
  RESETPASSWORD: {
    service: "/auth",
    url: "/resetpassword",
    method: "POST",
    authenticate: true,
  },
  CHANGEPASSWORD: {
    service: "/auth",
    url: "/changepassword",
    method: "POST",
    authenticate: true,
  },
  FORGOTPASSWORD: {
    service: "/auth",
    url: "/forgotpassword",
    method: "POST",
    authenticate: true,
  },
  RESETPASSWORD: {
    service: "/auth",
    url: "/resetpassword",
    method: "POST",
    authenticate: true,
  },
  LINKVERIFICATION: {
    service: "/auth",
    url: "/linkverification",
    method: "GET",
    authenticate: true,
  },
  GETUSERSLIST: {
    service: "/users",
    url: "/getusersList",
    method: "GET",
    authenticate: true,
  },
};

export default ApiRoutes;