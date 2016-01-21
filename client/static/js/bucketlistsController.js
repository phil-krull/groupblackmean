ourApp.controller('bucketlistsController', function(usersFactory)
  var _this = this;

  function getUserinfo(userinfo) {
    usersFactory.show(userinfo, function(bucketlists) {
      _this.bucketlists = bucketlists
    })
  }

  function getAllusers() {
    usersFactory.showusers(function(alluserslist) {
      _this.allusers = alluserslist
    })
  }


  getUserinfo();
