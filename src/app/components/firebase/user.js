'use strict';

angular.module('cinetekAngular')
  .factory('user', function ($location, authRef, ConnectedUser) {

    var user = null;

    function connect() {
      return function (email, password) {
        authRef.$authWithPassword({
          email: email,
          password: password
        }).then(function (authData) {
          user = new ConnectedUser(authData.uid, email);
          $location.path('/list');
        }).catch(function (error) {
          console.error("Authentication failed:", error);
        });
      };
    }

    return {
      connect: connect(),
      validConnection: function () {
        if (!user) {
          if (authRef.$getAuth().uid) {
            user = new ConnectedUser(authRef.$getAuth().uid, authRef.$getAuth().password.email);
          }
          else {
            $location.path('/login')
          }
        }

      },
      isConnected: function () {
        if (user) {
          return user.isConnected()
        }
        return false;
      },
      disconnect: function () {
        if (user) {
          user.disconnect();
        }
      },
      get: function () {
        console.log('user', user);
        return user;
      }
    }


  })
  .factory('ConnectedUser', function () {
    
    function ConnectedUser(uid, email) {
      this.uid = uid;
      this.email = email;
      this.connected = true;
    }

    ConnectedUser.prototype.isConnected = function () {
      return this.connected;
    };

    ConnectedUser.prototype.disconnect = function () {
      authRef.$unauth();
      this.uid = '';
      this.email = '';
      this.connected = false;
      $location.path('/login');
    };
    
    return ConnectedUser;
    
  })
;
