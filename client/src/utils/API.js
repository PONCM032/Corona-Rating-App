import axios from "axios";

export default {
  register: function (user) {
    return axios.post("/api/register", user);
  },
  login: function (user) {
    return axios.post("/api/login", user);
  },
  isAuthorized: function () {
    return axios.get("/api/authorized");  //routes folder in server get request
  },
  logout: function () {
    return axios.get("/api/logout");
  },
  availableUN: function (username) {
  
    return axios.get("/api/user/?username=" + username);
  },

  newRating: function(data){
    return axios.post("/api/newrating", data)
  },

  userData: function() {
    return axios.get('/api/user_data')
  },

  deleteReview: function(id) {
    return axios.delete('/api/review/' + id)
  },

  editReview: function(id) {
    return axios.post('/api/review/' + id)
  }
};
