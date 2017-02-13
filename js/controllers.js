angular.module('idyangu.controllers', [])

.controller('mainCtlr', ['$scope','isyangservice', 
                        
 function($scope) {
       
         $scope.me = "passports";
         $scope.hello = "About"; 
   
      }
])