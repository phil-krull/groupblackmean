ourApp.controller('usersController', function(userFactory, $location) {
  var _this = this;

  this.create = function(user) {
    usersFactory.create(user) {
    this.user = {},
    $location.path('/dashboard');
  }

})