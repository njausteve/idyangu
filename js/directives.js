angular.module('idyangu.directives', [])

.directive ('navigation', function(){
       return {
         
              restrict: 'E',
              scope : {   data : '='},
              templateUrl: './views/navigationBar.html'
   
       }
})