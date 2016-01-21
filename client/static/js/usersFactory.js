ourApp.factory('userFactory', function($http) {
  var getUserinfo,

  return {

    create: function(user) {
      $http.post('/users', user).success(function(userinfo) {
        getUserinfo = userinfo;
      })
    },

    show: function(callback) {
      $http.get('/user/' + getUserinfo.id).success(function(User) {
      callback(Userinfo);
      })
    },

    showusers: function(callback) {
      $http.get('/users').success(function(allusers) {
        callback(allusers);
      })
    }



  }

})