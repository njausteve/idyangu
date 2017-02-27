angular.module('idyangu.controllers', [])

.controller('mainCtlr', ['$scope', '$state', '$stateParams', 'idyangservice', 
 
 function($scope ,$state, $stateParams) {
   
   
         console.log("inside mainCtlr");

                 $scope.me = "passports";
                 $scope.hello = "About"; 

              }
])